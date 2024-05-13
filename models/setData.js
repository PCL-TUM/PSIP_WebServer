const db = require("../connection/dbConnection");

var setData = {
  setDataParcel: function (callback) {
    return db.query(
      `SELECT * FROM parcel;`, 
      callback
    );
  }
}

module.exports = setData;