const db = require("../connection/dbConnection");

var signinData = {
  checkSigninData: function (email, password, callback) {
    return db.query(
      `SELECT REQUEST_BY_SYSTEM_ACCOUNT_ID, system_account.EMAIL, system_account.FRIST_NAME, system_account.LAST_NAME
       FROM user
       LEFT JOIN system_account ON system_account.ID = user.REQUEST_BY_SYSTEM_ACCOUNT_ID
       WHERE system_account.EMAIL = '${email}' AND user.PASSWORD = '${password}' AND user.ACTIVE = '1';`,
      callback
    );
  }
}

module.exports = signinData;