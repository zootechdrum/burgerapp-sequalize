require('dotenv').config()

module.exports = {


  "development": {
    "username": process.env.db_user,
    "password": process.env.db_pw,
    "database": process.env.db_db,
    "host": process.env.db_host,
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "test": {
    "username": "root",
    "password": "password",
    "database": "burgers_db",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "production": {
    "username": process.env.db_user,
    "password": process.env.db_pw,
    "database": process.env.db_db,
    "host": process.env.db_host,
    "dialect": "mysql",
    "operatorsAliases": false


  }
}
