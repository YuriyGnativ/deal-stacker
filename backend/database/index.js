const mongoose = require("mongoose");

mongoose.Promise = Promise;

mongoose.connect("mongodb://myAppAdmin:root@localhost:27017/test");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connections error:"));

module.exports = { db, mongoose };
