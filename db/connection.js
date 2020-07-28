var mysql = require('mysql')

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'FINANCE'
})

connection.connect()

connection.query('describe savings', function (err, rows, fields) {
  if (err) {
    throw err;
  }
  console.log('savings is accessible')
});

module.exports = connection;

// CREATE TABLE savings (name VARCHAR(30) NOT NULL, goal INT NOT NULL, current INT NOT NULL, date DATE NOT NULL);