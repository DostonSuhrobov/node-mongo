const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const MongoClient = require('mongodb').MongoClient;

MongoClient.connect(
  'mongodb+srv://yoda:yoda_12345@cluster0.blgzc.mongodb.net/test?retryWrites=true&w=majority',
  
  (err, client) => {
    if (err) return console.error(err);
    console.log('Connected to Database');
  }
);

// mongodb+srv://<yoda>:<yoda_12345>@cluster0.79fyp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, function () {
  console.log('listening on 3000');
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/quotes', (req, res) => {
  console.log(req.body);
});
