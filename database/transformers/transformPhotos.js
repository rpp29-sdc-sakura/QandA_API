console.time('photos')
const { parseFile } = require('fast-csv');
const { getFileAsObject, updateFile } = require('./fsReadAndWrite.js');
const path = require('path');

let records = getFileAsObject(0);
let questionIds = getFileAsObject('questionIds');
let answerIds = getFileAsObject('answerIds');
let section = 0;
const numSections = 50000;

const file = path.resolve(__dirname, '../csvs/answers_photos.csv');
const options = {
  headers: true,
  // maxRows: 100
};
const transform = (row) => ({
  id: parseInt(row.id),
  answer_id: parseInt(row.answer_id),
  url: row.url
});

const cb = (row) => {
  let aId = row.answer_id;
  let { qId, aIndex } = answerIds[aId];
  let { pId, index } = questionIds[qId];

  let currentSection = Math.floor(pId / numSections);
  if (currentSection !== section) {
    console.log(`switching from section ${section} to section ${currentSection}`);
    updateFile(section, records);
    section = currentSection;
    records = getFileAsObject(section);
  }

  let pIndex = pId - ( currentSection * numSections );
  let answer = records[pIndex].questions[index].answers[aIndex];

  if (answer.photos) {
    answer.photos.push(row.url);
  } else {
    answer.photos = [row.url];
  }
};

parseFile(file, options)
  .transform(transform)
  .on('data', (row) => cb(row))
  .on('end', rowCount => {
    updateFile(section, records);
    console.timeEnd('photos')
  });