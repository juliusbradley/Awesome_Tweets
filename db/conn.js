const pgp = require('pg-promise')();
const db = pgp ({
  host: 'localhost',
  database: 'tweets',
  user: 'julius',
  password: '123'
})

module.exports = db;
