require('dotenv').config()

module.exports = {


  "development": {
    "username": "root",
    "password": "password",
    "database": "burgers_db",
    "host": "127.0.0.1",
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
    "username": JAWSDB_URL.user,
    "password": JAWSDB_URL,password,
    "database": JAWSDB_URL.database,
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false


  }
}
