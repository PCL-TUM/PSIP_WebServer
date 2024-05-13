const express = require("express");
const router = express.Router();
const setData = require("../models/setData");

router.post("/setDataParcel", async function (req, res) {
  let parcel = req.body.parcel;
  let DataParcel;

  if (parcel != "") {
    DataParcel = await setDataParcel(parcel);
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

async function setDataParcel(parcel) {
  return new Promise((resolve, reject) => {
    try {
      setData.setDataParcel(data, (err, rows) => {
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