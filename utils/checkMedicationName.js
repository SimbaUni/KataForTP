const Medication = require("../models/medication");

const checkMedicationName = async (req, res, next) => {
    const medication = await Medication.findOne({ "name": req.body.name }).exec();

    if (medication) {
      req.flash("success", "You have successfully Deleted Your Medication");
      res.redirect("/medications")
    } else {
      next();
    }
};

module.exports = checkMedicationName;
