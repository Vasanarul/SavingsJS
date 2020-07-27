const Money = require('mongodb').MongoClient

Money.connect('mongodb://localhost:27017/finance', function(err, db) {
  if (err) {
    throw err
  }
  console.log('MongoDB connection established!')
  var userInfo = db.db("finance");
  userInfo.createCollection("users", function(err, res) {
    if (err) throw err;
    console.log("Collection created!")
  })
})

module.exports = Money;