const express = require("express");
const router = express.Router();
const deleteData = require("../models/deleteData");

router.post("/deleteData", async function (req, res) {
  let deleteType = req.body.deleteType
  let dataResponse

  switch (parseInt(deleteType)) {
    case 1: {
      dataResponse = await deleteDataParcel(req.body)
      break;
    }
    case 2: {
      dataResponse = await deleteDataDepartment(req.body)
      break;
    }
    case 3: {
      dataResponse = await deleteDataAccount(req.body)
      break;
    }
    default:
      res.json({ status: "Failed", data: "กำหนด Delete Type" });
      break;
  }

  if (typeof dataResponse != "boolean") {
    res.json({ status: "Failed", data: dataResponse });
  } else if (dataResponse) {
    res.json({ status: "Succeed", data: "Delete data successfully" });
  } else {
    res.json({ status: "Failed", data: "Error" });
  }
 
});

async function deleteDataParcel(data) {
  return new Promise((resolve, reject) => {
    try {
      deleteData.deleteDataParcel(data, (err, rows) => {
        if (err) {
          console.log(err);
          resolve(false);
        } else {
          resolve(true);
        }
      });
    } catch (err) {
      console.log(err);
      resolve(false);
    }
  });
}

async function deleteDataDepartment(data) {
  return new Promise((resolve, reject) => {
    try {
      deleteData.deleteDataDepartment(data, (err, rows) => {
        if (err) {
          console.log(err);
          resolve(false);
        } else {
          resolve(true);
        }
      });
    } catch (err) {
      console.log(err);
      resolve(false);
    }
  });
}

async function deleteDataAccount(data) {
  return new Promise((resolve, reject) => {
    try {
      deleteData.deleteDataAccount(data, (err, rows) => {
        if (err) {
          console.log(err);
          resolve(false);
        } else {
          resolve(true);
        }
      });
    } catch (err) {
      console.log(err);
      resolve(false);
    }
  });
}

module.exports = router