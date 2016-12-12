'use strict';
const databaseName = process.env.NODE_ENV === 'subsequent-turtle'
const pgp = require('pg-promise')();
const connectionString = `postgres://${process.env.USER}@localhost:5432/subsequent-turtle`
const db = pgp(connectionString);

module.exports = {
  pgp: pgp,
  db: db
}
