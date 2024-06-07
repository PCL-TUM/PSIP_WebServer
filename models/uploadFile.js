const db = require("../connection/dbConnection");

var uploadFiles = {
  updateImage: function (parcelID, fileImageName, callback) {
    return db.query(
      "UPDATE `parcel` SET parcel.IMAGE_URL= ? WHERE parcel.ID = ? AND active = 1",
      [fileImageName, parcelID],
      callback
    );
  },
};
module.exports = uploadFiles;