const Money = require('mongodb').MongoClient

Money.connect('mongodb://localhost:27017', function(err, db) {
  if (err) {
    throw err
  }
  console.log('MongoDB connection established!')
});

module.exports = Money;