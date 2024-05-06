const express = require('express');
const bodyParser = require("body-parser");
const app = express();

// json encode
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false,}));

// use routes
app.get("/", (req, res) => {
    res.send("Hello! This is PSIP Project Server");
});
  
// port setting 
const port = process.env.PORT || 5000;
app.listen(port, process.env.PORT, function(){
    console.log(`Server is running on port ${port}`);
});