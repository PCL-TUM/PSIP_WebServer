const express = require("express");
const router = express.Router();
const insertData = require("../models/insertData");

router.post("/insertDataParcel", async function (req, res) {
  let dataParcel = req.body
  console.log(dataParcel);
})

module.exports = router