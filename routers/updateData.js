const express = require("express");
const router = express.Router();
const updateData = require("../models/updateData");

router.post("/updateData", async function (req, res) {
    let dataParcel = req.body
    console.log(dataParcel);
  })

module.exports = router