const mongoose = require('mongoose')

const appointmentSchema = mongoose.Schema(
  {
    date: {
        type: String,
        required: [false, 'Please add a date'],
    },
    time: {
        type: String,
        required: [false, 'Please add a time'],
    },
    patientid: {
        type: String,
        required: [false, 'Please add a patientid'],
    }
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Appointment', appointmentSchema)
