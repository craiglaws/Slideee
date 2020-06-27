use vue_project;
db.dropDatabase();

db.animals.insertMany([

  {
    "name": "African Elephant",
    "speed": 25,
    "weight": 6000,
    "size": 320,
    "population": 415000,
    "lifespan": 70
  },

  {
    "name": "Cheetah",
    "speed": 80,
    "weight": 65,
    "size": 90,
    "population": 7100,
    "lifespan": 15
  },

  {
    "name": "Giraffe",
    "speed": 37,
    "weight": 800,
    "size": 610,
    "population": 97500,
    "lifespan": 26
  },

  {
    "name": "Lion",
    "speed": 50,
    "weight": 190,
    "size": 120,
    "population": 20000,
    "lifespan": 14
  },

  {
    "name": "White Rhinoceros",
    "speed": 31,
    "weight": 2300,
    "size": 190,
    "population": 18000,
    "lifespan": 50
  },

  {
    "name": "Leopard",
    "speed": 36,
    "weight": 31,
    "size": 70,
    "population": 700000,
    "lifespan": 17
  },

  {
    "name": "Mountain Gorilla",
    "speed": 25,
    "weight": 150,
    "size": 180,
    "population": 1063,
    "lifespan": 35
  },

  {
    "name": "Cape Buffalo",
    "speed": 35,
    "weight": 870,
    "size": 150,
    "population": 900000,
    "lifespan": 25
  },

  {
    "name": "Emperor Penguin",
    "speed": 5,
    "weight": 23,
    "size": 130,
    "population": 250000,
    "lifespan": 20
  },

  {
    "name": "Walrus",
    "speed": 21,
    "weight": 1000,
    "size": 240,
    "population": 129000,
    "lifespan": 40
  },

  {
    "name": "Wandering Albatross",
    "speed": 67,
    "weight": 7,
    "size": 360,
    "population": 20100,
    "lifespan": 60
  },

  {
    "name": "Chimpanzee",
    "speed": 25,
    "weight": 60,
    "size": 150,
    "population": 300000,
    "lifespan": 15
  },

  {
    "name": "Giant Panda",
    "speed": 20,
    "weight": 100,
    "size": 90,
    "population": 1864,
    "lifespan": 20
  },

  {
    "name": "Bengal Tiger",
    "speed": 40,
    "weight": 220,
    "size": 110,
    "population": 2500,
    "lifespan": 10
  },

  {
    "name": "Orangutan",
    "speed": 3,
    "weight": 75,
    "size": 140,
    "population": 104700,
    "lifespan": 45
  },

  {
    "name": "Snow Leopard",
    "speed": 40,
    "weight": 32,
    "size": 56,
    "population": 4000,
    "lifespan": 21
  },

  {
    "name": "King Cobra",
    "speed": 8,
    "weight": 6,
    "size": 400,
    "population": 500000,
    "lifespan": 20
  },

  {
    "name": "Red Kangaroo",
    "speed": 35,
    "weight": 47,
    "size": 150,
    "population": 8542148,
    "lifespan": 22
  },

  {
    "name": "Koala",
    "speed": 2,
    "weight": 85,
    "size": 15,
    "population": 100000,
    "lifespan": 18
  },

  {
    "name": "Komodo Dragon",
    "speed": 12,
    "weight": 91,
    "size": 313,
    "population": 6000,
    "lifespan": 30
  },

  {
    "name": "Saltwater Crocodile",
    "speed": 18,
    "weight": 1000,
    "size": 520,
    "population": 200000,
    "lifespan": 70
  },

  {
    "name": "Tasmanian Devil",
    "speed": 8,
    "weight": 8,
    "size": 65,
    "population": 20000,
    "lifespan": 6
  },

  {
    "name": "Platypus",
    "speed": 22,
    "weight": 2,
    "size": 60,
    "population": 50000,
    "lifespan": 17
  },

  {
    "name": "Eurasian Lynx",
    "speed": 50,
    "weight": 25,
    "size": 75,
    "population": 10000,
    "lifespan": 13
  },

  {
    "name": "Reindeer",
    "speed": 50,
    "weight": 180,
    "size": 150,
    "population": 2100000,
    "lifespan": 15
  },

  {
    "name": "American Bison",
    "speed": 35,
    "weight": 990,
    "size": 180,
    "population": 530000,
    "lifespan": 20
  },

  {
    "name": "Grizzly Bear",
    "speed": 35,
    "weight": 200,
    "size": 200,
    "population": 55000,
    "lifespan": 25
  },

  {
    "name": "Grey Wolf",
    "speed": 37,
    "weight": 80,
    "size": 81,
    "population": 300000,
    "lifespan": 8
  },

  {
    "name": "Moose",
    "speed": 35,
    "weight": 700,
    "size": 210,
    "population": 1000000,
    "lifespan": 25
  },

  {
    "name": "Florida Manatee",
    "speed": 18,
    "weight": 450,
    "size": 350,
    "population": 13000,
    "lifespan": 60
  },

  {
    "name": "Polar Bear",
    "speed": 25,
    "weight": 450,
    "size": 160,
    "population": 25000,
    "lifespan": 25
  },

  {
    "name": "Llama",
    "speed": 35,
    "weight": 84,
    "size": 99,
    "population": 7000000,
    "lifespan": 25
  },

  {
    "name": "Pygmy Sloth",
    "speed": 1,
    "weight": 3,
    "size": 53,
    "population": 100,
    "lifespan": 20
  },

  {
    "name": "Anaconda",
    "speed": 10,
    "weight": 250,
    "size": 910,
    "population": 40000,
    "lifespan": 10
  },

  {
    "name": "Jaguar",
    "speed": 49,
    "weight": 96,
    "size": 76,
    "population": 64000,
    "lifespan": 15
  },

  {
    "name": "Capybara",
    "speed": 22,
    "weight": 66,
    "size": 64,
    "population": 5000000,
    "lifespan": 10
  },

  {
    "name": "Wild Haggis",
    "speed": 88,
    "weight": 3,
    "size": 10,
    "population": 30000,
    "lifespan": 6
  },

  {
    "name": "Badger",
    "speed": 19,
    "weight": 12,
    "size": 30,
    "population": 562000,
    "lifespan": 15
  },

  {
    "name": "Red Fox",
    "speed": 30,
    "weight": 8,
    "size": 72,
    "population": 225000,
    "lifespan": 9
  },

  {
    "name": "Ostrich",
    "speed": 70,
    "weight": 120,
    "size": 280,
    "population": 150000,
    "lifespan": 75
  },

  {
    "name": "Galapagos Tortoise",
    "speed": 1,
    "weight": 227,
    "size": 91,
    "population": 1000,
    "lifespan": 100
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
