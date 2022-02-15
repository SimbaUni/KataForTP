const express = require("express");
const { Mongoose } = require("mongoose");
const router = express.Router();
const Medication = require("../models/medication");
const checkMedicationName = require("../utils/checkMedicationName");
const { rawListeners } = require("../models/medication");

router.get("/", async (req, res) => {
 
  try {
    const medications = await Medication.find().exec();
    res.render("medications", { medications });
  } catch (error) {
    console.log(error);
  }
});
router.post("/", checkMedicationName, async (req, res) => {
  //make schema
  const newMedication = {
    name: req.body.name,
    strength: req.body.strength,
    packSize: req.body.packSize,
    totalPacks: req.body.totalPacks,
  };

  Medication.create(newMedication);
 
  req.flash("success", "You have successfully added the medication");
  try {
    res.redirect("/medications");
  } catch (error) {
    console.log(error);
  }
});
router.get("/new", (req, res) => {
  res.render("medications_new");
});

router.get("/:id/edit", async (req, res) => {
  try {
    const medication = await Medication.findById(req.params.id).exec();

    res.render("medications_edit", { medication });
  } catch (error) {
    console.log(error);
  }
});

router.put("/:id", async (req, res) => {
  const medication = {
    name: req.body.name,
    strength: req.body.strength,
    packSize: req.body.packSize,
    totalPacks: req.body.totalPacks,
  }
  console.log(medication)
  try {
    const updatedMedication = await Medication.findByIdAndUpdate(req.params.id, medication, {
      new: true
    }).exec();
    req.flash("success", "You have successfully Updated Your Stock");
    res.redirect("/medications");
  } catch (error) {
    console.log(error);
  }
});
router.delete("/:id/", async (req, res) => {
  try {
    const deletedMedications = await Medication.findByIdAndDelete(req.params.id).exec();
    req.flash("success", "You have successfully Deleted Your Medication");
    res.redirect("/medications");
  } catch (error) {
    console.log(error);
  }
});


module.exports = router;
