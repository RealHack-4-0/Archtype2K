const express = require('express')
const router = express.Router()
const {
    createAppointment,
    getAppointment,
    getAllAppointment,
} = require('../controller/appointmentController')

const { protect ,  patientProtect , healthProProtect , superAdminProtect} = require('../middleware/authMiddleware')


router.post('/',protect, patientProtect , createAppointment)
router.post('/all',protect, patientProtect , getAllAppointment)
router.post('/one',protect, patientProtect , getAppointment)

module.exports = router