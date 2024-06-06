const express = require("express");
const multer = require('multer');
const router = express.Router();

const storage = multer.diskStorage({ 
  destination: function (req, file, cb) {
    cb(null, '../uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + ".png")
  }
})

const upload = multer({ storage: storage })

router.post('/uploadFile', upload.single('file'), (req, res) => { 
  res.send(req.file) 
})

module.exports = router