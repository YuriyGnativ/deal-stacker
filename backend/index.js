const express = require("express");
const { config } = require("dotenv");
const { tokenCheck } = require("./middleware");
const cors = require("cors");

const router = require("./routes");
require("./database");
config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// app.use(tokenCheck);
app.use("/api", router);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server's running on ${process.env.PORT || 5000} port`);
});
