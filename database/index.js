const mongoose = require('mongoose');
const dbAddress = 'mongodb://localhost/qa';

mongoose.connect(dbAddress, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}, () => {
  console.log('Success connecting to databse')
})

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


let fetchQuestions = (productId) => {
  console.log('inside fetch', productId)
  return Question.find({
    'product_id': productId
  }).exec()
}


module.exports = {
  fetchQuestions
}