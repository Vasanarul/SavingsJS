var mysql = require('mysql')

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'FINANCE'
})

connection.connect()

connection.query('describe savings_goal', function (err, rows, fields) {
  if (err) {
    throw err;
  }
  console.log('savings_goal is accessible')
});

module.exports = connection;