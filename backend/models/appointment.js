const mongoose = require('mongoose')

const appointmentSchema = mongoose.Schema(
  {
    date: {
        type: String,
        required: [false, 'Please add a date'],
    },
    patientid: {
        type: String,
        required: [false, 'Please add a patientid'],
    },
    time: {
      type: String,
      required: [false, 'Please add a time'],
    },
    counter:{
        type: Number,
        required: [false, 'Please add a counter'],
        default: 0
    }
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Appointment', appointmentSchema)
