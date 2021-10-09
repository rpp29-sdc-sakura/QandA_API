const db = require('./../database/index.js');
const models = require('./../database/models.js');
const helpers = require('./helpers.js');

exports.getData = (req, res) => {
  let productId = req.query.product_id || req.params.product_id
  models.Product.find({'_id': productId}).lean()
  .then((data) => {
    if (!data[0]) {
      return res.status(404).end();
    }
    helpers.formatData(data)
    .then((formatted) => {
      res.status(200).send(formatted);
    })
  })
  .catch((err) => {
    console.log('ERROR in getData: ', err)
    return res.status(404).end();
  })
};
// .explain("executionStats")

exports.likeQuestion = (req, res) => {
  let questionId = req.params.question_id;
  models.Product.updateOne(
    {'questions.question_id': questionId},
    {$inc: {'questions.$.question_helpfulness': 1}}
  )
    .then((data) => {
      res.status(204).send();
    })
    .catch((err) => {
      res.status(404).end();
    })

};

exports.likeAnswer = (req, res) => {
  let answerId = req.params.answer_id;
  models.Product.updateOne(
    // filter object
    {'questions.answers.id': answerId},
    // update object
    {$inc: {'questions.$.answers.$[answer].helpfulness': 1}},
    // options
    {arrayFilters: [{'answer.id': answerId}]}
  )
    .then((data) => {
      res.status(204).send();
    })
    .catch((err) => {
      res.status(404).end();
    })
};

exports.reportQuestion = (req, res) => {
  let questionId = req.params.question_id;
  models.Product.updateOne(
    // filter object
    {'questions.question_id': questionId},
    // update object
    {$inc: {'questions.$.reported': 1}}
    // options
  )
    .then((data) => {
      res.status(204).send();
    })
    .catch((err) => {
      res.status(404).end();
    })
};

exports.reportAnswer = (req, res) => {
  let answerId = req.params.answer_id;
  models.Product.updateOne(
    // filter object
    {'questions.answers.id': answerId},
    // update object
    {$inc: {'questions.$.answers.$[answer].reported': 1}},
    // options
    {arrayFilters: [{'answer.id': answerId}]}
  )
    .then((data) => {
      res.status(204).send();
    })
    .catch((err) => {
      res.status(404).end();
    })
};

exports.submitQuestion = (req, res) => {
  let productId = req.data.product_id;
  let questionData = {
    question_id: helpers.generateRandomInt(),
    product_id: productId,
    question_body: req.body,
    queston_date: new Date().getTime(),
    asker_name: req.name,
    asker_email: req.email,
    reported: 0,
    question_helpfulness: 0,
    answers: []
  };

  models.Product.updateOne(
    {'_id': productId},
    {$push: {'questions': questionData}},
    {upsert: true}
  )
  .then((data) => {
    res.status(201).send();
  })
  .catch((err) => {
    res.status(404).end();
  })
};

exports.submitAnswer = (req, res) => {
  let questionId = req.params.question_id;
  let answerData = {
    //id (generate large random number + 7000000)
    id: helpers.generateRandomInt(),
    question_id: questionId,
    body: req.body.body,
    date: new Date().getTime(),
    answerer_name: req.body.name,
    answerer_email: req.body.email,
    reported: 0,
    helpfulness: 0,
    photos: req.body.photos
  };

  models.Product.updateOne(
    {'question_id': questionId},
    { $push: {'questions.$.answers': answerData }}
  )
  .then((data) => {
    res.status(201).send();
  })
  .catch((err) => {
    console.log('error in submitAnswer: ', err)
    res.status(404).end();
  })
};

exports.logInteraction = (req, res) => {
  res.sendStatus(200);
};