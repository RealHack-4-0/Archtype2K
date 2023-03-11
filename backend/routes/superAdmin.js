const express = require('express')
const multer = require("multer")
const path = require('path')
const axios = require("axios")
const router = express.Router()
const {
  registerUser,
  loginUser,
  getMe,
  updateUser,
} = require('../controller/userController')

const {
    addHealthPro,
    updateHealthPro,
    deleteHealthPro,

} = require('../controller/superAdminController')
const { protect ,  patientProtect , healthProProtect , superAdminProtect} = require('../middleware/authMiddleware')


router.post('/',registerUser)
router.post('/login', loginUser)
router.post('/update',protect, updateUser)
router.get('/me', protect, getMe)

router.post('/healthpro', addHealthPro)
router.post('/healthpro', addHealthPro)


module.exports = router