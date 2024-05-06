const db = require("../connection/dbConnection");

var getData = {
    getDataParcel: function (callback) {
        return db.query(
            `SELECT * FROM pacel`
        ),
        callback
    }
}

module.exports = getData;