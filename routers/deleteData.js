const express = require("express");
const router = express.Router();
const setData = require("../models/deleteData");

router.post("/deleteDataPacel", async function (req, res) {
  let pacel = req.body.pacel;
  let DataPacel;

  if (pacel != "") {
    DataPacel = await deleteDataPacel(pacel);
  }

  if (DataPacel != null) {
    if (DataPacel.length > 0) {
      res.json({ status: "Succeed", data: DataPacel });
    } else {
      res.json({ status: "Failed", data: "No Pacel information" });
    }
  } else {
    res.json({ status: "Failed", data: "Error" });
  }
});

async function deleteDataPacel(pacel) {
  return new Promise((resolve, reject) => {
    try {
      deleteData.deleteDataPacel(data, (err, rows) => {
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