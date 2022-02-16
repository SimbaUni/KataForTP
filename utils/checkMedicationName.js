const Medication = require("../models/medication");

const checkMedicationName = async (req, res, next) => {
    const medication = await Medication.findOne({ "name": req.body.name }).exec();

    if (medication) {
      req.flash("success", "This medication is already in the database");
      res.redirect("/medications");
    } else {
      next();
    }
};

module.exports = checkMedicationName;
