const mongoose = require('mongoose');
const dbAddress = 'mongodb://ip-172-31-46-80.us-east-2.compute.internal/qa';
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