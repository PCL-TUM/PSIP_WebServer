const db = require("../connection/dbConnection");

var deleteData = {
  deleteDataParcel: function (data, callback) {
    let id = data.id;

    return db.query(
      `DELETE FROM parcel WHERE id = ?`,
      [ id ], 
      callback
    );
  },

  deleteDataDepartment: function (data, callback) {
    let id = data.id;

    return db.query(
      `DELETE FROM department WHERE id = ?`,
      [ id ], 
      callback
    );
  },

  deleteDataAccount: function (data, callback) {
    let id = data.id;

    return db.query(
      `DELETE FROM system_account WHERE id = ?`,
      [ id ], 
      callback
    );
  },
}

module.exports = deleteData;