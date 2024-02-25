const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
console.log(process.env);

const app = express();
app.use(cors());
app.use(express.json());

app.listen(4001, () => {
  console.log("Server is running on port 4001...");
});
