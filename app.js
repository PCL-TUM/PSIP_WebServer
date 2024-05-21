const express = require('express');
const bodyParser = require("body-parser");
const app = express();

// json encode
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false,}));

// require routes
const getData = require("./routers/getData");
const insertData = require("./routers/insertData");
const updateData = require("./routers/updateData");
const deleteData = require("./routers/deleteData");

// use routes
app.use("/getData", getData);
app.use("/insertData", insertData);
app.use("/updateData", updateData);
app.use("/deleteData", deleteData);

// default route
app.get("/", (req, res) => {
    res.send("Hello! This is PSIP Project Server");
});

// port setting 
const port = process.env.PORT || 5000;
app.listen(port, process.env.PORT, function(){
    console.log(`Server is running on port ${port}`);
});