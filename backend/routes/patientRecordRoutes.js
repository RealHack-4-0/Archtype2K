const express = require('express')
const router = express.Router()
const {
    createPatientRecord,
    viewPatientRecordPatient,
    viewPatientRecordDoctor

} = require('../controller/patientRecordController')

const { protect ,  patientProtect , healthProProtect , superAdminProtect} = require('../middleware/authMiddleware')


router.post('/',protect , createPatientRecord)
router.post('/patient',protect , patientProtect ,viewPatientRecordPatient)
router.post('/doc',protect ,healthProProtect ,  viewPatientRecordDoctor)


module.exports = router