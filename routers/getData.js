const express = require("express");
const router = express.Router();
const getData = require("../models/getData");

router.post("/DataPacel", async function (req, res) {
    let pacel = req.body.pacel;
    let DataPacel;
    
    if (pacel != "") {
        DataPacel = await getDataParcel(pacel);
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

async function getDataParcel(pacel) {
  return new Promise((pacel, reject) => {
    try {
      getData.getDataParcel(pacel, (err, rows) => {
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