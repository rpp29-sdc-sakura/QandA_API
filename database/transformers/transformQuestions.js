console.time('questions')
const { parseFile } = require('fast-csv');
const { getFileAsObject, updateFile } = require('./fsReadAndWrite.js');
const path = require('path');

// STORAGE FOR WHERE TO READ FROM / WRITE TO
// Section parameters
let records = []; // { _id: 0, questions: [] };
let questionIds = {}; // { 0: { p: 0, i: 0 }}

// counter to tell us which file's data we currently have as an object in memory
let section = 0;

// number of product ids we are going to save to a file
const numSections = 50000;

// for fast-csv we need a filepath (to load data from)
const file = path.resolve(__dirname, '../csvs/questions.csv');
// options (such as if we want fast-csv to turn a row into an object)
const options = {
  headers: true
  // maxRows: 10
};
// a transform function for any manipulation of the row data itself
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

// an onRead function that will execute every time fast-csv reads a row of data
// this will save our rows to an object and when that object gets too big
// it will save it as a json file to storage in order to not run out of memory
// using some math on the productId we can figure out if we need to load a different json file from storage to update
const cb = (row) => {
  // get the product id
  let id = parseInt(row.product_id);

  // only read save / read file if the current row is in a different section
  let currentSection = Math.floor(id / numSections);
  if (currentSection !== section) {
    console.log(`saving section ${section} and loading section ${currentSection}`);
    updateFile(section, records);
    section = currentSection;
    records = getFileAsObject(section);
  }

  // get the index to the proper record
  let index = id - ( currentSection * numSections );
  let record = records[index];

  // save question to records
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

// CREATE A READ STREAM AND TRANSFORM DATA INTO JSON
parseFile(file, options)
  .transform(transform)
  .on('data', (row) => cb(row))
  .on('end', rowCount => {
    // final update on end to save the current file in memory
    updateFile(section, records);
    // save our reference object to storage
    updateFile('questionIds', questionIds);
    console.timeEnd('questions')
  });