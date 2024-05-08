const db = require("../connection/dbConnection");

var uploadFiles = {
  updateImage: function (image_name, rfid, callback) {
    return db.query(
      "UPDATE `member` SET `image_file`= ? WHERE pacel_id = ? AND active = 1",
      [image_name, pacel_id],
      callback
    );
  },

  getImageName: function (pacel_id, callback) {
    return db.query(
      "SELECT image_file FROM `member` WHERE pacel_id = ? AND active = 1",
      [pacel_id],
      callback
    );
  },
};
module.exports = uploadFiles;