const express = require('express')
const app = express()
const port = 1224
const db = require('../db/connection.js')

app.get('/', (req, res) => res.send('Financejs is a-go!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))