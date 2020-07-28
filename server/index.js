const express = require('express')
const app = express()
const path = require('path');
const port = 1224;

const db = require('../db/connection.js');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../dist')));

app.get('/', (req, res) => res.send('Financejs is a-go!'));

app.get('/api/users', (req, res) => {
  db.query('select * from savings', function (err, rows, fields) {
    if (err) {
      throw err;
    }
    res.send(rows)
  })
});

app.post('/api/users', (req, res) => {
  console.log(req.body);
  console.log(req.body.name);
  db.query(`INSERT into savings (name,goal,current,date) VALUES('${req.body.name}',${req.body.goal},${req.body.current},'${req.body.date}');`, function(err, rows) {
    if (err) {
      throw err;
    }
    res.send(rows);
  })
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));