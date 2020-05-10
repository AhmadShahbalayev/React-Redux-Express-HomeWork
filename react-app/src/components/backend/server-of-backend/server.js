const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

let users = [];

// GET requests:

app.get('/users', (req, res) => res.json(users));

// POST requests: 

let idGenerator = users.reduce((acc, cur) => {acc > cur.id ? acc : cur.id}, 0)

app.post('/users', (req, res) => {
  let newId = {
    id: idGenerator++
  }
  users.push({...req.body, ...newId});
  res.json({...req.body, ...newId});
})

// PUT requests: 

app.put('/users/:id', (req, res) => {
  const userIndex = users.findIndex(item => parseInt(item.id) === parseInt(req.params.id));
  if (userIndex !== -1) {
    users[userIndex] = { ...users[userIndex], ...req.body };
    res.status(200).json(users[userIndex]);
  } else {
    res.status(400).json(`You are trying to update non-existing user`);
  }
})

// DELETE requests: 

app.delete('/users/:id', (req, res) => {
  const found = users.some(item => parseInt(item.id) === parseInt(req.params.id));
  if (found) {
    users = users.filter(item => parseInt(item.id) !== parseInt(req.params.id));
    res.status(200).json(users);
  } else {
    res.status(404).send(`There is no data related to id: ${req.params.id}`);
  }
})

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));