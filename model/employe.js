const mongoose = require("mongoose");
const { Schema } = mongoose;

const EmployeSchema = Schema({
  code: { type: String, required: true },
  name: { type: String, required: true },
  gender: { type: String, required: true },
  salarioAnnuale: { type: String, required: true },
  annoDiNascita: { type: String, required: true }
});

module.exports = mongoose.model("Employe", EmployeSchema);
