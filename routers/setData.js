const express = require("express");
const router = express.Router();
const setData = require("../models/setData");

router.post("/DataPacel", async function (req, res) {
    let pacel = req.body.pacel;
    let DataPacel;
    
    if (pacel != "") {
        DataPacel = await setData.setDataParcel();
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