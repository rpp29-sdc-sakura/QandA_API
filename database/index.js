const mongoose = require('mongoose');
const dbAddress = 'mongodb://localhost/qa';

mongoose.connect(dbAddress, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error'))

let questionSchema = mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  product_id: Number,
  body: String,
  date_written: Date,
  asker_name: String,
  asker_email: String,
  reported: Number,
  helpful: Number
})

let answerSchema = mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  question_id: Number,
  body: String,
  date_written: Date,
  answerer_name: String,
  answerer_email: String,
  reported: Number,
  helpful: Number
})

let answerPhotoSchema = mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  answer_id: Number,
  url: String
})

let Question = mongoose.model('Question', questionSchema)
let Answer = mongoose.model('Answer', answerSchema)
let AnswerPhoto = mongoose.model('AnswerPhoto', answerPhotoSchema)

// let fetch = (callback) => {
//   Question.find({id: 1})
//     .exec((err, docs) => {
//       if (err) {
//         console.log('Error in fetch');
//       } else {
//         callback(docs)
//       }
//     })
// }

let fetch = (productId) => {
  console.log('inside fetch')
  return Question.find({product_id: productId})
  .exec()
}

module.exports = {
  db,
  Question,
  Answer,
  AnswerPhoto,
  fetch
}
