const db = require("../connection/dbConnection");

var getData = {
  // begin get Parcel -------------------------------------------------------------------------------------
  getAllDataParcel: function (callback) {
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
        LEFT JOIN system_account ON system_account.ID = parcel.REQUEST_BY_SYSTEM_ACCOUNT_ID;`, 
      callback
    );
  },
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
  // end get Parcel -------------------------------------------------------------------------------------
   
  // begin get Department -------------------------------------------------------------------------------
  getAllDataDepartment: function (callback) {
    return db.query(
      `SELECT 
            department.ID, 
            department.DEPART_NAME, 
            department.KEY_WORD, 
            department.KEY_WORD_EN, 
            department.CREATE_BY 
        FROM department 
        WHERE department.ACTIVE = 1;`, 
      callback
    );
  },
  getSearchDataDepartment: function (searchDepartment, callback) {
    return db.query(
      `SELECT 
          department.ID, 
          department.DEPART_NAME, 
          department.KEY_WORD, 
          department.KEY_WORD_EN, 
          department.CREATE_BY 
        FROM department
        WHERE department.DEPART_NAME LIKE "%${searchDepartment}%" AND department.ACTIVE = 1;`, 
      callback
    );
  },
   // end get Department -------------------------------------------------------------------------------
}

module.exports = getData;

