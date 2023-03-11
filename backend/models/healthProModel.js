const mongoose = require("mongoose");

const patientRecordSchema = mongoose.Schema(
  {
    user_id: {
      type: String,
      required: [true, "Please add a user_id"],
    },
    user_id: {
      type: String,
      required: [true, "Please add a user_id"],
    },
    doc_id: {
      type: String,
      required: [true, "Please add a user_id"],
    },
    prescriptions: {
      type: String,
      required: [true, "Please add a prescriptions"],
      unique: true,
    },
    treatment_plans: {
      type: String,
      required: [true, "Please add a treatment plans"],
    },
    progress_notes: {
      type: String,
      required: [true, "Please add a progress notes"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("patientRecord", patientRecordSchema);
