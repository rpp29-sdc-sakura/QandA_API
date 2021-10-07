let {getFileAsObject} = require('./transformers/fsReadAndWrite.js')
let models = require('./models.js')
let db = require('./index.js')

const uploadRecords = async (records) => {
  await models.Product.collection.insertMany(records);
};

const uploadToDb = async () => {
  console.time('load')
  let records = [];
  let rounds = 5;

  for (let i = 0; i < 21; i++) {
    records = await getFileAsObject(i)
      .filter(record => record != null);

    let process = Math.floor(records.length / rounds)
    for (let j = 0; j < rounds; j++) {
      let start = process * j;
      let end = process + (process * j);
      let batch = records.slice(start, end);

      await uploadRecords(batch);
    }
  }

  console.timeEnd('load')
}

uploadToDb();