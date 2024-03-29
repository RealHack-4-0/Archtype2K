const PatientRecord = require("../models/patientRecordModel");
const asyncHandler = require("express-async-handler");

const createPatientRecord = asyncHandler(async (req, res) => {
  const { patient_id, doc_id, prescriptions, treatment_plans, progress_notes } =
    req.body;

  // Create user
  const patientRecord = await PatientRecord.create({
    patient_id,
    doc_id,
    prescriptions,
    treatment_plans,
    progress_notes,
  });

  if (patientRecord) {
    res.status(201).json(patientRecord);
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

const viewPatientRecordPatient = asyncHandler(async (req, res) => {
  const { patient_id } = req.body;

  // Check for user email
  const patientRecord = await PatientRecord.findOne({ patient_id });

  if (patientRecord) {
    res.json(patientRecord);
  }
  else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

const viewPatientRecordDoctor = asyncHandler(async (req, res) => {
  const { doc_id } = req.body;
  console.log(doc_id);
  // Check for user email
  const patientRecord = await PatientRecord.findOne({  doc_id });

  if (patientRecord) {
    res.json(patientRecord);
  }
  else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

module.exports = {
  createPatientRecord,
  viewPatientRecordPatient,
  viewPatientRecordDoctor
};
