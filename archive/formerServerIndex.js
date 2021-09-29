const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const db = require('./../database/index.js');

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(express.static(__dirname + '/../client/dist'));

app.get('/test', (req, res) => {
  // return db.updateData(num)
  //   .then(() => {
  //     db.fetchComplete(num)
  //       .then((complete) => {
  //         res.send(complete)
  //       })
  //   })
  // return db.callIt()
  //   .then(() => {
  //     console.log(Date.now())
  //     res.sendStatus(200)
  //   })
  // return db.fetchComplete(4)
  //   .then((complete) => {
  //     res.send(complete)
  //   })
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});