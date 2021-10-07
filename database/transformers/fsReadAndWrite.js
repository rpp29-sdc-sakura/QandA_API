const fs = require('fs');
const path = require('path');

// get json file data and convert json to an object
// return the object to be stored in memory
// if file does not exist and empty array is returned
module.exports.getFileAsObject = (section) => {
  const filePath = path.resolve(__dirname, `../json/${section}.json`);
  try {
    let data = fs.readFileSync(filePath);
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
};

// save a file where the name of the file is section
// and the data for the file is data converted to readable json
module.exports.updateFile = (section, data) => {
  const filePath = path.resolve(__dirname, `../json/${section}.json`);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};