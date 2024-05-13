const db = require("../connection/dbConnection");

var getData = {
  getDataParcel: function (callback) {
    return db.query(
      `SELECT * FROM parcel;`, 
      callback
    );
  },
  getDataDepartment: function (callback) {
    return db.query(
      `SELECT * FROM department;`, 
      callback
    );
  }
}

module.exports = getData;