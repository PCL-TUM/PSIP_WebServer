var mysql = require("mysql");

// localhost database
var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "project",
  database: "db_psip",
});

module.exports = db;