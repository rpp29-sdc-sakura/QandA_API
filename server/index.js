const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const db = require('../database/index.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(express.static(__dirname + '/../client/dist'));


app.get('/test', (req, res) => {
  console.log('attempting request')
  return db.fetchQuestions(3)
    .then((docs) => {
      console.log('get doc: ', docs)
      res.send(docs)
    })
})


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});