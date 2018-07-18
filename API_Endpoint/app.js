const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");

const allRoutes = require("./routes/index");

app.use(allRoutes);
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan("short"))

app.listen(3002, () => {
    console.log("Server is up and listening on 3002");
});