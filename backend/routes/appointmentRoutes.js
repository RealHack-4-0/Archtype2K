const express = require('express')
const router = express.Router()
const {
    createAppointment,

} = require('../controller/appointmentController')

const { protect ,  patientProtect , healthProProtect , superAdminProtect} = require('../middleware/authMiddleware')


router.post('/',protect, patientProtect , createAppointment)

module.exports = router