const express = require('express')
const app = express()
const path = require('path');
const port = 1224;
const db = require('../db/connection.js')

app.use(express.static(path.join(__dirname, '../dist')));

app.get('/', (req, res) => res.send('Financejs is a-go!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));