const mongoose = require('mongoose');
const dbAddress = 'mongodb://ec2-13-58-42-204.us-east-2.compute.amazonaws.com:3000/';
const db =
mongoose.connect(dbAddress, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

db
  .then((db) => console.log('Connected to mongoDB'))
  .catch((err) => {
    console.log('MongoDB connection error: ', err)
  })

const models = require('./models.js');


module.exports = {
  db
}