const express = require("express");
const router = express.Router();
const singinData = require("../models/signin");

router.post("/singin", async function (req, res) {
  let email = req.body.email;
  let password = req.body.password;

  let userData = await checkSigninData(email, password);
 
  if (userData.length > 0) {
    res.json({ status: "Succeed", data: userData });
  } else {
    res.json({ status: "Failed", data: "No User information" });
  }
});

async function checkSigninData(email, password) {
  return new Promise((resolve, reject) => {
    try {
      singinData.checkSigninData(email, password, (err, rows) => {
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