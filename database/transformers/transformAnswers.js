console.time('answers')
const { parseFile } = require('fast-csv');
const { getFileAsObject, updateFile } = require('./fsReadAndWrite.js');
const path = require('path');

let records = getFileAsObject(0);
let questionIds = getFileAsObject('questionIds');
let answerIds = {};
let section = 0;
const numSections = 50000;

const file = path.resolve(__dirname, '../csvs/answers.csv');
const options = {
  headers: true,
  discardUnmappedColumns: true
};
const transform = (row) => ({
  id: parseInt(row.id),
  question_id: parseInt(row.question_id),
  body: row.body,
  date: new Date(parseInt(row.date)).toISOString(),
  answerer_name: row.answerer_name,
  answerer_email: row.answerer_email,
  reported: parseInt(row.reported),
  helpfulness: parseInt(row.helpfulness)
});

const cb = (row) => {
  let qId = row.question_id;
  let { pId, index } = questionIds[qId];
  let currentSection = Math.floor(pId / numSections);

  if (currentSection !== section) {
    updateFile(section, records);
    section = currentSection;
    records = getFileAsObject(section);
  }

  let pIndex = pId - ( currentSection * numSections );
  let question = records[pIndex].questions[index];

  if (question.answers) {
    answerIds[row.id] = {
      qId: qId,
      aIndex: question.answers.length
    };
    question.answers.push(row);
  } else {
    answerIds[row.id] = {
      qId: qId,
      aIndex: 0
    };
    question.answers = [row];
  }
};

parseFile(file, options)
  .transform(transform)
  .on('data', (row) => cb(row))
  .on('end', rowCount => {
    updateFile(section, records);
    updateFile('answerIds', answerIds);
    console.timeEnd('answers')
  });