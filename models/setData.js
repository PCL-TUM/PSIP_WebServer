const db = require("../connection/dbConnection");

var setData = {
    setDataParcel: function (callback) {
        return db.query(
            `SELECT * FROM pacel`
        ),
        callback
    }
}

module.exports = setData;