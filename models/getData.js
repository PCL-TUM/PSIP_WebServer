const db = require("../connection/dbConnection");

var getData = {
  // begin get Parcel -------------------------------------------------------------------------------------
  getByIdDataParcel: function (IdParcel, callback) {
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
        WHERE parcel.ID = "${IdParcel}";`,
      callback
    );
  },
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
  getByIdDataDepartment: function (IdDepartment, callback) {
    return db.query(
      `SELECT 
            department.ID, 
            department.DEPART_NAME, 
            department.KEY_WORD, 
            department.KEY_WORD_EN, 
            department.CREATE_BY 
        FROM department 
        WHERE department.ID = ${IdDepartment}
        AND department.ACTIVE = 1;`, 
      callback
    );
  },
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
        WHERE department.DEPART_NAME LIKE "%${searchDepartment}%" 
        AND department.ACTIVE = 1;`, 
      callback
    );
  },
  // end get Department ---------------------------------------------------------------------------------

  // begin get System Account ---------------------------------------------------------------------------
  getByIdDataAccount: function (IdAccount, callback) {
    return db.query(
      `SELECT 
          system_account.ID,
          system_account.EMAIL,
          system_account.FRIST_NAME,
          system_account.LAST_NAME,
          system_account.FRIST_NAME_EN,
          system_account.LAST_NAME_EN,
          department.DEPART_NAME,
          system_account_role.NAME
        FROM system_account
        LEFT JOIN department ON department.ID = system_account.REQUEST_BY_SYSTEM_ACCOUNT_DEPART
        LEFT JOIN system_account_role ON system_account_role.ID = system_account.REQUEST_BY_SYSTEM_ACCOUNT_ROLE
        WHERE system_account.ID = "${IdAccount}" AND system_account.ACTIVE = 1;`, 
      callback
    );
  },
  getAllDataAccount: function (callback) {
    return db.query(
      `SELECT 
          system_account.ID,
          system_account.EMAIL,
          system_account.FRIST_NAME,
          system_account.LAST_NAME,
          system_account.FRIST_NAME_EN,
          system_account.LAST_NAME_EN,
          department.DEPART_NAME,
          system_account_role.NAME
        FROM system_account
        LEFT JOIN department ON department.ID = system_account.REQUEST_BY_SYSTEM_ACCOUNT_DEPART
        LEFT JOIN system_account_role ON system_account_role.ID = system_account.REQUEST_BY_SYSTEM_ACCOUNT_ROLE
        WHERE system_account.ACTIVE = 1;`, 
      callback
    );
  },
  getSearchDataAccount: function (searchAccount, callback) {
    return db.query(
      `SELECT 
          system_account.ID,
          system_account.EMAIL,
          system_account.FRIST_NAME,
          system_account.LAST_NAME,
          system_account.FRIST_NAME_EN,
          system_account.LAST_NAME_EN,
          department.DEPART_NAME,
          system_account_role.NAME
        FROM system_account
        LEFT JOIN department ON department.ID = system_account.REQUEST_BY_SYSTEM_ACCOUNT_DEPART
        LEFT JOIN system_account_role ON system_account_role.ID = system_account.REQUEST_BY_SYSTEM_ACCOUNT_ROLE
        WHERE system_account.EMAIL LIKE "%${searchAccount}%" OR
              system_account.FRIST_NAME LIKE "%${searchAccount}%" OR
              system_account.LAST_NAME LIKE "%${searchAccount}%" OR
              system_account.FRIST_NAME_EN LIKE "%${searchAccount}%" OR
              system_account.LAST_NAME_EN LIKE "%${searchAccount}%" OR
              department.DEPART_NAME LIKE "%${searchAccount}%"
        AND system_account.ACTIVE = 1;`, 
      callback
    );
  },
  // end get System Account ------------------------------------------------------------------------------
}

module.exports = getData;


