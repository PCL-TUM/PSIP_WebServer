const express = require("express");
const router = express.Router();
const getData = require("../models/getData");

router.post("/getDataParcel", async function (req, res) {
  // let parcel = req.body.parcel;
  let  DataParcel = await getDataParcel();

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

router.post("/getDataDepartment", async function (req, res) {
  let  DataDepartment = await getDataDepartment();

  if (DataDepartment != null) {
    if (DataDepartment.length > 0) {
      res.json({ status: "Succeed", data: DataDepartment });
    } else {
      res.json({ status: "Failed", data: "No Department information" });
    }
  } else {
    res.json({ status: "Failed", data: "Error" });
  }
});

// async function get data
async function getDataParcel() {
  return new Promise((resolve, reject) => {
    try {
      getData.getDataParcel((err, rows) => {
        if (rows != null) {
          resolve(rows);
        } else {
          resolve(null);
        }
      });
    } catch (err) {
      console.log(err);
      resolve(null);
    }
  });
}

async function getDataDepartment() {
  return new Promise((resolve, reject) => {
    try {
      getData.getDataDepartment((err, rows) => {
        if (rows != null) {
          resolve(rows);
        } else {
          resolve(null);
        }
      });
    } catch (err) {
      console.log(err);
      resolve(null);
    }
  });
}

module.exports = router