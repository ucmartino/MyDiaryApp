const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const routes = require("./routes/index");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("short"));
routes(app);

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log("Server is up and listening on: " + PORT);
});