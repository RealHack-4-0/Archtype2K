const mongoose = require('mongoose')

const patientRecord = mongoose.Schema(
  {
    patient_id: {
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
)

module.exports = mongoose.model('PatientRecord', patientRecord)
