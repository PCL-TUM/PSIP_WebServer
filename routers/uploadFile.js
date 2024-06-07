const express = require("express");
const router = express.Router();
const uploadFile = require("../models/uploadFile");

// begin multer config
const multer = require('multer');
const storage = multer.diskStorage({ 
  destination: function (req, file, cb) {
    cb(null, './uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + ".png")
  }
})
const upload = multer({ storage: storage })
// end multer config

router.post('/uploadFile', upload.single('file'), async function (req, res) { 
  let parcelID = req.body.parcelID;
  let fileImageName = req.file.filename;
  let dataResponse;

  dataResponse = await updateImage(parcelID, fileImageName)

  if (typeof dataResponse != "boolean") {
    res.json({ status: "Failed", data: dataResponse });
  } else if (dataResponse) {
    res.json({ status: "Succeed", data: req.file });
  } else {
    res.json({ status: "Failed", data: "Error" });
  }

  // res.json({ status: "Succeed", data: req.file });
});

async function updateImage(parcelID, fileImageName) {
  return new Promise((resolve, reject) => {
    try {
      uploadFile.updateImage(parcelID, fileImageName, (err, rows) => {
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