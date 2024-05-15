const db = require("../connection/dbConnection");

var getData = {
  getAllDataParcel: function (callback) {
    return db.query(
      `SELECT * FROM parcel;`, 
      callback
    );
  },
  getSearchDataParcel: function (parcelID, callback) {
    return db.query(
      `SELECT * FROM parcel WHERE ${parcelID}`,
      callback
    );
  },
  getAllDataDepartment: function (callback) {
    return db.query(
      `SELECT * FROM department;`, 
      callback
    );
  }
}

module.exports = getData;