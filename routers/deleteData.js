const express = require("express");
const router = express.Router();
const setData = require("../models/deleteData");

router.post("/deleteDataParcel", async function (req, res) {
  let parcel = req.body.parcel;
  let DataParcel;

  if (parcel != "") {
    DataParcel = await deleteDataParcel(parcel);
  }

  if (DataParcel != null) {
    if (DataParcel.length > 0) {
      res.json({ status: "Succeed", data: DataParcel });
    } else {
      res.json({ status: "Failed", data: "No Parcel information" });
    }
  } else {
    res.json({ status: "Failed", data: "Error" });
  }
});

async function deleteDataParcel(parcel) {
  return new Promise((resolve, reject) => {
    try {
      deleteData.deleteDataParcel(data, (err, rows) => {
        if (err) {
          console.log(err);
          resolve(null);
        } else {
          resolve(true);
        }
      });
    } catch (err) {
      console.log(err);
      resolve(null);
    }
  });
}

module.exports = router