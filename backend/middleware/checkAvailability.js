const checkAvailability = (req, res, next) => {
    const now = moment();
    const appointmentsWithinHour = appointments.filter((appointment) => {
      return now.diff(appointment.date, 'hours') < 1;
    });
  
    if (appointmentsWithinHour.length >= 10) {
      return res.status(400).json({ message: 'Sorry, all appointments within the next hour have been booked.' });
    }
  
    next();
  };

  module.exports = {
    checkAvailability, 
  }