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
  console.log('inside get')
  return db.fetch(3)
    .then((data) => {
      res.send(data)
    })
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});