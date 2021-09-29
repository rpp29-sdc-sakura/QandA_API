const mongoose = require('mongoose');
const dbAddress = 'mongodb://localhost/qa';
mongoose.Promise = require('bluebird')

mongoose.connect(dbAddress, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error'))

let answerPhotoSchema = mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  answer_id: Number,
  url: String
})

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
  photos: Array
  // photos: [answerPhotoSchema]
})

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
  answers: Array
  // answers: [answerSchema]
})

let Question = mongoose.model('Question', questionSchema)
let Answer = mongoose.model('Answer', answerSchema)
let AnswerPhoto = mongoose.model('AnswerPhoto', answerPhotoSchema)


let updateData = (productId) => {
  return Question.find({product_id: productId}).cursor().eachAsync(async function(q, i) {
    let questionFilter = q.question_id
    await Answer.find({question_id: questionFilter}).cursor().eachAsync(async function(a, i) {
      let answerFilter = a.id
      await AnswerPhoto.find({answer_id: answerFilter})
        .then(async function(photos) {
          await Answer.updateMany({id: answerFilter}, {$push: { photos: photos}}).exec()
        })
      })
      .then(async function() {
        await Answer.find({question_id: questionFilter}).exec()
          .then(async function(answers) {
            await Question.updateMany({question_id: questionFilter}, {$push: {answers: answers}}).exec()
          })
        })
  })
}

//1000011

async function callIt() {
  console.log(Date.now())
  let prodId = 14270
  while (prodId <= 17892) {
    await updateData(prodId)
    prodId++
  }
}

// let updateQuestions = (productId) => {
//   return Question.find({product_id: productId}).cursor().eachAsync(async function(q, i) {
//     let questionFilter = q.question_id
//     await Answer.find({question_id: questionFilter}).exec()
//       .then(async function(answers) {
//         await Question.updateMany({question_id: questionFilter}, {$push: {answers: answers}}).exec()
//       })
//   })
// }

// let updateQuestions = (productId) => {
//   return Question.find({product_id: productId}).cursor().eachAsync(async function(q, i) {
//     let questionFilter = q.question_id
//     await Answer.find({question_id: questionFilter}).exec()
//       .then(async function(answers) {
//         await Question.updateMany({question_id: questionFilter}, {$push: {answers: answers}}).exec()
//       })
//   })
// }

let fetchComplete = (productId) => {
  return Question.find({product_id: productId})
}


// let elt = (productId) => {
//   // new Promise((resolve, reject) => {
//   return updateAnswers(productId)
//   //     .then(() => {
//   //       updateQuestions(productId)
//   //         .then(() => {
//   //           fetchComplete(productId)
//   //             .then((complete) => {
//   //               console.log('complete')
//   //             })
//   //         })
//   //     })
//   // })
// }

// elt(1)


module.exports = {
  db,
  Question,
  Answer,
  AnswerPhoto,
  updateData,
  // updateQuestions,
  fetchComplete,
  callIt
}