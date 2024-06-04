const express = require("express");
const router = express.Router();
const updateData = require("../models/updateData");

router.post("/updateData", async function (req, res) {
  let updateType = req.body.updateType
  let dataResponse

  switch (parseInt(updateType)) {
    case 1: {
      dataResponse = await updateDataParcel(req.body)
      break;
    }
    case 2: {
      dataResponse = await updateDataDepartment(req.body)
      break;
    }
    case 3: {
      dataResponse = await updateDataAccount(req.body)
      break;
    }
    case 4: {
      dataResponse = await updateConfirmParcel(req.body)
      break;
    }
    default:
      res.json({ status: "Failed", data: "กำหนด Update Type" });
      break;
  }

  if (typeof dataResponse != "boolean") {
    res.json({ status: "Failed", data: dataResponse });
  } else if (dataResponse) {
    res.json({ status: "Succeed", data: "Update data successfully" });
  } else {
    res.json({ status: "Failed", data: "Error" });
  }
 
});

async function updateDataParcel(data) {
  return new Promise((resolve, reject) => {
    try {
      updateData.updateDataParcel(data, (err, rows) => {
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

async function updateDataDepartment(data) {
  return new Promise((resolve, reject) => {
    try {
      updateData.updateDataDepartment(data, (err, rows) => {
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

async function updateDataAccount(data) {
  return new Promise((resolve, reject) => {
    try {
      updateData.updateDataAccount(data, (err, rows) => {
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

async function updateConfirmParcel(data) {
  return new Promise((resolve, reject) => {
    try {
      updateData.updateConfirmParcel(data, (err, rows) => {
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