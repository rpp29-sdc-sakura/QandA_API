const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const db = require('./../database/index.js');
const controllers = require('./controllers.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(express.static(__dirname + '/../client/dist'));

app.get('/qa/questions', controllers.getData);
app.put('/qa/questions/:question_id/helpful', controllers.likeQuestion);
app.put('/qa/answers/:answer_id/helpful', controllers.likeAnswer);
app.put('/qa/questions/:question_id/report', controllers.reportQuestion);
app.put('/qa/answers/:answer_id/report', controllers.reportAnswer);
app.post('/qa/questions', controllers.submitQuestion);
app.post('/qa/questions/:question_id/answers', controllers.submitAnswer);
app.post('/interactions', controllers.logInteraction);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});