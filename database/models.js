const mongoose = require('mongoose');

let answerSchema = mongoose.Schema({
  _id: Number,
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
  _id: Number,
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


// productSchema.pre('find', function () {
//   this._startTime = Date.now();
// });

// productSchema.post('find', function () {
//   if (this._startTime != null) {
//     console.log('Product find runtime in Mongoose: ', Date.now() - this._startTime);
//   }
// });


let Answer = mongoose.model('Answer', answerSchema)
let Question = mongoose.model('Question', questionSchema)
let Product = mongoose.model('Product', productSchema)


module.exports = {
  Answer,
  Question,
  Product
}