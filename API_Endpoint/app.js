const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");

app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan("short"));

app.get("/", (req, res) => {
   console.log("Responding to root route");
   res.send("Hello from Root");
});

app.listen(3003, () => {
    console.log("Server is up and listening on 3003");
});