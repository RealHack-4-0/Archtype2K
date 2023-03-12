const Appointment = require("../models/appointment");
const asyncHandler = require("express-async-handler");

const createAppointment = asyncHandler(async (req, res) => {
  const { date, time, patienid } = req.body;

  const appointment = await Appointment.find({ date, time })
    .sort({ _id: -1 })
    .limit(1)
    .exec();

  let counter = 0;

  if (appointment || appointment.length > 0) {
    counter = appointment[0].counter;
  } else {
    counter = 0;
  }

  if (counter >= 10) {
    res.status(400);
    throw new Error("Maximum number of appointments reached for the hour");
  } else {
    const appointment = new Appointment({
      date,
      time,
      patienid,
      counter: counter + 1,
    });

    // Save the appointment to the database
    await appointment.save();

    res.status(201).json(appointment);
  }
});

const getAppointment = asyncHandler(async (req, res) => {
  const { date, time, patienid } = req.body;
  const appointment = await Appointment.find({ date, time });
  res.json(appointment);
});

const getAllAppointment = asyncHandler(async (req, res) => {
  const appointment = await Appointment.find();
  res.json(appointment);
});

const deleteAppointment = asyncHandler(async (req, res) => {
  const { date, time, patienid } = req.body;

  if (!date || !time || !patienid) {
    res.status(400);
    throw new Error("Please add all fields");
  }

  const Appointment = await Appointment.findOne({ email });

  if (Appointment) {
    res.status(200);
  } else {
    res.status(400);
    throw new Error("delete failed");
  }
});

module.exports = {
  createAppointment,
  getAppointment,
  getAllAppointment,
};
