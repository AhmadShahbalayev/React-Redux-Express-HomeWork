// To run this server, just copy and paste path below to the terminal (cmd)
// cd desktop/tool-kit/react/react-app/src/components/coins/server-of-coins
// then, npm run nodemon

const cors = require('cors');
const express = require('express');
const bodyParser = require("body-parser");
let coins = require('./coins_named.json');

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.all("/coin", function (req, res, next) {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Headers", "*");
  res.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.set("Content-Type", "application/json");
  next();
});

// GETS:

app.get('/coin/:id', (req, res) => {
  res.json(coins.find(item => +item.id === +req.params.id));
})

app.get('/coin', (req, res) => {
  const count = parseInt(req.query.count);
  const offset = parseInt(req.query.offset);
  (count > 0 && offset > 0) ? res.json(coins.slice(offset, offset + count)) : res.json(coins);
})

// POSTS: 

app.post('/coin', (req, res) => {
  coins.push(req.body)
  res.json(coins);
})

// DELETES: 

app.delete("/coin/:id", (req, res) => {
  const coinId = Number(req.params.id);
  const itemToDelete = coins.find(item => item.id === coinId);
  if (itemToDelete) {
    coins = coins.filter((item) => item.id !== coinId);
    res.status(200).json(coins);
  } else {
    res.status(404).send('There is no coin with such id');
  }
});

app.listen(3001, () => console.log('Server started!'));