const express = require('express')
const multer = require("multer")
const path = require('path')
const axios = require("axios")
const router = express.Router()


const {
    addHealthPro,
    loginHealthPro,
    updateHealthPro,
    deleteHealthPro,
    verifyHealthPro
} = require('../controller/superAdminController')

const { protect ,  patientProtect , healthProProtect , superAdminProtect} = require('../middleware/authMiddleware')


router.post('/', superAdminProtect , addHealthPro)
router.post('/login', loginHealthPro)
router.post('/update',healthProProtect, updateHealthPro)
router.post('/verify', healthProProtect , verifyHealthPro)
router.delete('/', healthProProtect , deleteHealthPro)



module.exports = router