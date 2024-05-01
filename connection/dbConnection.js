var mysql = require("mysql");

// localhost DB
var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "project",
  database: "db_be",
});

module.exports = db;