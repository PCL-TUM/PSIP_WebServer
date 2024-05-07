const express = require("express");
const router = express.Router();
const setData = require("../models/setData");

router.post("/setDataPacel", async function (req, res) {
    let pacel = req.body.pacel;
    let DataPacel;
    
    if (pacel != "") {
        DataPacel = await setDataParcel(pacel);
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

async function setDataPacel(pacel) {
    return new Promise((resolve, reject) => {
      try {
        setData.setDataPacel(data, (err, rows) => {
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