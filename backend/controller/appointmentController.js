const Appointment = require('../models/appointment');

const createAppointment = async (req, res) => {
  const { date, time, patienid } = req.body;

  // Check if there are less than 10 appointments in the past hour
  const hourAgo = new Date(Date.now() - 60 * 60 * 1000);
  const count = await Appointment.countDocuments({
    date: { $gte: hourAgo },
  });
  if (count >= 10) {
    throw new Error('Maximum number of appointments reached for the hour');
  }

  // Create the appointment record
  const appointment = new Appointment({
    date,
    time,
    patienid,
  });

  // Save the appointment to the database
  await appointment.save();

  res.status(201).json(appointment);
};

module.exports = {
    createAppointment
  };