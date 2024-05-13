var mysql = require("mysql");

// localhost database
var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "psip_database",
});

module.exports = db;