console.time('questions')
const { parseFile } = require('fast-csv');
const { getFileAsObject, updateFile } = require('./fsReadAndWrite.js');
const path = require('path');

let records = [];
let questionIds = {};

let section = 0;

const numSections = 50000;

const file = path.resolve(__dirname, '../csvs/questions.csv');

const options = {
  headers: true
};

const transform = (row) => ({
  question_id: parseInt(row.question_id),
  product_id: parseInt(row.product_id),
  question_body: row.question_body,
  question_date: new Date(parseInt(row.question_date)).toISOString(),
  asker_name: row.asker_name,
  asker_email: row.asker_email,
  reported: parseInt(row.reported),
  question_helpfulness: parseInt(row.question_helpfulness)
});

const cb = (row) => {
  let id = parseInt(row.product_id);

  let currentSection = Math.floor(id / numSections);
  if (currentSection !== section) {
    updateFile(section, records);
    section = currentSection;
    records = getFileAsObject(section);
  }

  let index = id - ( currentSection * numSections );
  let record = records[index];

  if (record) {
    questionIds[row.question_id] = {
      pId: id,
      index: record.questions.length
    };
    record.questions.push(row);
  } else {
    questionIds[row.question_id] = {
      pId: id,
      index: 0
    };
    records[index] = {
      _id: id,
      questions: [row]
    };
  }
};

parseFile(file, options)
  .transform(transform)
  .on('data', (row) => cb(row))
  .on('end', rowCount => {
    updateFile(section, records);
    updateFile('questionIds', questionIds);
    console.timeEnd('questions')
  });