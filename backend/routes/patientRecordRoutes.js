const express = require('express')
const router = express.Router()
const {
    createPatientRecord,
    viewPatientRecordPatient,
    viewPatientRecordDoctor

} = require('../controller/patientRecordController')

const { protect ,  patientProtect , healthProProtect , superAdminProtect} = require('../middleware/authMiddleware')


router.post('/',protect , createPatientRecord)
router.get('/',protect , patientProtect ,viewPatientRecordPatient)
router.get('/doc',protect ,healthProProtect ,  viewPatientRecordDoctor)


module.exports = router