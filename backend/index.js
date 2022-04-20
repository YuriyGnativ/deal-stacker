const express = require("express");

const app = express();

app.get("/", (req, res, next) => {
  res.send("working!");
});

app.listen(5000, () => {
  console.log(`Server's running on ${5000} port`);
});
