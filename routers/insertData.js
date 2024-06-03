const express = require("express");
const router = express.Router();
const insertData = require("../models/insertData");

router.post("/insertData", async function (req, res) {
  let insertType = req.body.insertType
  let dataResponse
  // dataResponse = await insertDataParcel(req.body)
  // console.log(dataResponse);

  switch (parseInt(insertType)) {
    case 1: {
      dataResponse = await insertDataParcel(req.body)
      break;
    }

    case 2: {
      dataResponse = await insertDataDepartment(req.body)
      break;
    }

    case 3: {
      dataResponse = await insertDataAccount(req.body)
      break;
    }

    default:
      res.json({ status: "Failed", data: "กำหนด Insert Type" });
      break;
  }

  if (typeof dataResponse != "boolean") {
    res.json({ status: "Failed", data: dataResponse });
  } else if (dataResponse) {
    res.json({ status: "Succeed", data: "Insert data successfully" });
  } else {
    res.json({ status: "Failed", data: "Error" });
  }
 
});

async function insertDataParcel(data) {
  return new Promise((resolve, reject) => {
    try {
      insertData.insertDataParcel(data, (err, rows) => {
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

async function insertDataDepartment(data) {
  return new Promise((resolve, reject) => {
    try {
      insertData.insertDataDepartment(data, (err, rows) => {
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

async function insertDataAccount(data) {
  return new Promise((resolve, reject) => {
    try {
      insertData.insertDataAccount(data, (err, rows) => {
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