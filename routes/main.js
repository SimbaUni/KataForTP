const express = require("express");
const router = express.Router();
const Medication = require("../models/medication");

router.get("/", (req, res) => {
  res.render("home");
});


module.exports = router;
