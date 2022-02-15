const mongoose = require("mongoose");
const medicationSchema = new mongoose.Schema({
  name: String,
  strength: Number,
  packSize: Number,
  totalPacks: Number,
});
medicationSchema.index({
  "$**": "text",
});

module.exports = mongoose.model("Medication", medicationSchema);
