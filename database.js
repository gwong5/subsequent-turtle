'use strict';
const pgp = require('pg-promise')();
const connectionString = `postgres://${process.env.USER}@localhost:5432/list`
const db = pgp(connectionString);

const insertTodo = 'INSERT INTO LIST (task) VALUES ($1) RETURNING task'
const listAllTodoItems = 'SELECT * FROM list'

const Todo = {
  insert: todo => db.oneOrNone( insertTodo, [todo] ),
  findAll: () => db.any(listAllTodoItems)
}

module.exports = {Todo}
