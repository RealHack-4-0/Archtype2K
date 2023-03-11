const Appointment = require('../models/appointment');
const asyncHandler = require("express-async-handler");

const createAppointment = asyncHandler(async (req, res) => {
  const { date, time, patienid } = req.body;

  const appointment = await Appointment.find({ date, time })
  .sort({_id: -1})
  .limit(1)
  .exec();

  let counter = 0;

  if(appointment){
    counter = appointment[0].counter;
  }else{
    counter = 0
  }

  if (counter >= 10) {
    res.status(400)
    throw new Error('Maximum number of appointments reached for the hour');
  } else {
    const appointment = new Appointment({
      date,
      time,
      patienid,
      counter: counter + 1
    });
  
    // Save the appointment to the database
    await appointment.save();
  
    res.status(201).json(appointment);
  
  }

});

const getAppointment = asyncHandler (async (req, res) => {
  const { date, time, patienid } = req.body;
  const appointment = await Appointment.find({ date, time })
  res.json(appointment);
})

const getAllAppointment = asyncHandler (async (req, res) => {
  const appointment = await Appointment.find();
  res.json(appointment);
})

module.exports = {
    createAppointment,
    getAppointment,
    getAllAppointment

  };