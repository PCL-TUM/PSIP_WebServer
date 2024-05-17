const express = require("express");
const router = express.Router();
const getData = require("../models/getData");

router.post("/getDataParcel", async function (req, res) {
  let searchParcel = req.body.searchParcel;
  let DataParcel;

  if (searchParcel != "") {
     DataParcel = await getSearchDataParcel(searchParcel);
  } else {
     DataParcel = await getAllDataParcel();
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

router.post("/getDataDepartment", async function (req, res) {
  let searchDepartment = req.body.searchDepartment;
  let DataDepartment;

  if (searchDepartment != "") {
      DataDepartment = await getsearchDataDepartment(searchDepartment);
  } else {
      DataDepartment = await getAllDataDepartment();
  } 
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
async function getAllDataParcel() {
  return new Promise((resolve, reject) => {
    try {
      getData.getAllDataParcel((err, rows) => {
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

async function getSearchDataParcel(searchParcel) {
  return new Promise((resolve, reject) => {
    try {
      getData.getSearchDataParcel(searchParcel, (err, rows) => {
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

async function getAllDataDepartment() {
  return new Promise((resolve, reject) => {
    try {
      getData.getAllDataDepartment((err, rows) => {
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

async function getAllDataDepartment() {
  return new Promise((resolve, reject) => {
    try {
      getData.getSearchDataDepartment((err, rows) => {
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