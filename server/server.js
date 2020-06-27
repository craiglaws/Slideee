const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const cors = require("cors");

app.use(cors())

app.use(bodyParser.json());
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

MongoClient.connect('mongodb://localhost:27017')
  .then((client) => {
    const db = client.db('vue_project');
    const animalsCollection = db.collection('animals');
    app.use('/api/animals', createRouter(animalsCollection));
    const usersCollection = db.collection('users');
    app.use('/api/users', createRouter(usersCollection));
    const questionsCollection = db.collection('questions');
    app.use('/api/questions', createRouter(questionsCollection));
  })
  .catch(console.error);

app.listen(3000, function() {
  console.log(`Hotel server running on port ${this.address().port}`);
});
