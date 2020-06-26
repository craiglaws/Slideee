use vue_project;
db.dropDatabase();

db.animals.insertMany([
  {
    "name": "African Elephant",
    "speed": 25,
    "weight": 6000,
    "population": 415000
  },
  {
    "name": "Cheetah",
    "speed": 80,
    "weight": 65,
    "population": 7100
  },
  {
    "name": "Giraffe",
    "speed": 37,
    "weight": 800,
    "population": 97500
  }
]);


db.users.insertMany([
  {
    "name": "Sam",
    "score": 8
  },

  {
    "name": "Donald",
    "score": 10
  },

  {
    "name": "Craig",
    "score": 7
  }
]);
