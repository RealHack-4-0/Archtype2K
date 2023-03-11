const express = require('express')
const router = express.Router()
const {
  registerUser,
  loginUser,
  getMe,
  updateUser,
} = require('../controller/userController')
const { protect ,  patientProtect , healthProProtect , superAdminProtect} = require('../middleware/authMiddleware')


router.post('/',registerUser)
router.post('/login', loginUser)
router.post('/update',protect, updateUser)
router.get('/me', protect, getMe)


module.exports = router