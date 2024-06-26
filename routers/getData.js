const express = require("express");
const router = express.Router();
const getData = require("../models/getData");

router.post("/getDataParcel", async function (req, res) {
  let searchParcel = req.body.searchParcel;
  let DataParcel;

  if (searchParcel != "") {
     DataParcel = await getSearchDataParcel(searchParcel);
  } else {
     DataParcel = await getAllDataParcel();
  }

  if (DataParcel != null) {
    if (DataParcel.length > 0) {
      res.json({ status: "Succeed", data: DataParcel });
    } else {
      res.json({ status: "Failed", data: "No Parcel information" });
    }
  } else {
    res.json({ status: "Failed", data: "Error" });
  }
});

router.post("/getDataDepartment", async function (req, res) {
  let searchDepartment = req.body.searchDepartment;
  let DataDepartment;

  if (searchDepartment != "") {
      DataDepartment = await getSearchDataDepartment(searchDepartment);
  } else {
      DataDepartment = await getAllDataDepartment();
  } 
  if (DataDepartment != null) {
    if (DataDepartment.length > 0) {
      res.json({ status: "Succeed", data: DataDepartment });
    } else {
      res.json({ status: "Failed", data: "No Department information" });
    }
  } else {
    res.json({ status: "Failed", data: "Error" });
  }
});

router.post("/getDataAccount", async function (req, res) {
  let searchAccount = req.body.searchAccount;
  let DataAccount;

  if (searchAccount != "") {
      DataAccount = await getSearchDataAccount(searchAccount);
  } else {
      DataAccount = await getAllDataAccount();
  } 
  if (DataAccount != null) {
    if (DataAccount.length > 0) {
      res.json({ status: "Succeed", data: DataAccount });
    } else {
      res.json({ status: "Failed", data: "No Department information" });
    }
  } else {
    res.json({ status: "Failed", data: "Error" });
  }
});

// async function get data
async function getAllDataParcel() {
  return new Promise((resolve, reject) => {
    try {
      getData.getAllDataParcel((err, rows) => {
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

async function getSearchDataParcel(searchParcel) {
  return new Promise((resolve, reject) => {
    try {
      getData.getSearchDataParcel(searchParcel, (err, rows) => {
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

async function getAllDataDepartment() {
  return new Promise((resolve, reject) => {
    try {
      getData.getAllDataDepartment((err, rows) => {
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

async function getSearchDataDepartment(searchDepartment) {
  return new Promise((resolve, reject) => {
    try {
      getData.getSearchDataDepartment(searchDepartment, (err, rows) => {
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

async function getAllDataAccount() {
  return new Promise((resolve, reject) => {
    try {
      getData.getAllDataAccount((err, rows) => {
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

async function getSearchDataAccount(searchAccount) {
  return new Promise((resolve, reject) => {
    try {
      getData.getSearchDataAccount(searchAccount, (err, rows) => {
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