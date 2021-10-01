const mongoose = require('mongoose');


// let answerPhotoSchema = mongoose.Schema({
//   id: {
//     type: Number,
//     unique: true
//   },
//   answer_id: Number,
//   url: String
// });

let answerSchema = mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  question_id: Number,
  body: String,
  date: Date,
  answerer_name: String,
  answerer_email: String,
  reported: Number,
  helpfulness: Number,
  photos: [String]
});

let questionSchema = mongoose.Schema({
  question_id: {
    type: Number,
    unique: true
  },
  product_id: Number,
  question_body: String,
  question_date: Date,
  asker_name: String,
  asker_email: String,
  reported: Number,
  question_helpfulness: Number,
  answers: [answerSchema]
});

let productSchema = mongoose.Schema({
  _id: Number,
  questions: [questionSchema]
});

// let AnswerPhoto = mongoose.model('AnswerPhoto', answerPhotoSchema)
let Answer = mongoose.model('Answer', answerSchema)
let Question = mongoose.model('Question', questionSchema)
let Product = mongoose.model('Product', productSchema)

module.exports = {
  // AnswerPhoto,
  Answer,
  Question,
  Product
}