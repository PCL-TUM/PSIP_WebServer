const db = require("../connection/dbConnection");

var getData = {
  getAllDataParcel: function (callback) {
    return db.query(
      `SELECT * FROM parcel;`, 
      callback
    );
  },
  // getSearchDataParcel: function (searchParcel, callback) {
  //   return db.query(
  //     `SELECT * FROM parcel WHERE parcel.ID = ${searchParcel}`,
  //     callback
  //   );
  // },
  getSearchDataParcel: function (searchParcel, callback) {
    return db.query(
      `SELECT 
          parcel.ID, 
            parcel.PARCEL_DESCRIPTION, 
            parcel.PARCEL_WEIGHT, 
            parcel.IMAGE_URL, 
            parcel.UPLOAD_DATE, 
            department.DEPART_NAME, 
            system_account.FRIST_NAME, 
            system_account.LAST_NAME,
            system_account.FRIST_NAME_EN,
            system_account.LAST_NAME_EN,
            parcel.CONFIRM_BY, 
            parcel.CONFIRM_DATE 
        FROM parcel
        LEFT JOIN department ON department.ID = parcel.REQUEST_BY_SYSTEM_ACCOUNT_DEPART
        LEFT JOIN system_account ON system_account.ID = parcel.REQUEST_BY_SYSTEM_ACCOUNT_ID
        WHERE parcel.ID LIKE "%${searchParcel}%" OR department.DEPART_NAME LIKE "%${searchParcel}%";`,
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

