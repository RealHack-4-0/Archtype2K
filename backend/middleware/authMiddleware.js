const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

const protect = asyncHandler(async (req, res, next) => {
  let token

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // Get token from header
      token = req.headers.authorization.split(' ')[1]

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET)

      // Get user from the token
      req.user = await User.findOne({_id:decoded.id }).select('-password')

      if(req.user == null)
        throw new Error

      next()
    } catch (error) {
      console.log(error)
      res.status(401)
      throw new Error('Not authorized')
    }
  }

  if (!token) {
    res.status(401)
    throw new Error('Not authorized, no token')
  }
})

const patientProtect = asyncHandler(async (req, res, next) => {
  if (req.user.role == 'patient') {
    next()
  } else {
    res.status(401)
    throw new Error('Not authorized, not a patient')
  }
})

const healthProProtect = asyncHandler(async (req, res, next) => {
  if (req.user.role == 'health_pro') {
    next()
  } else {
    res.status(401)
    throw new Error('Not authorized, not an health pro')
  }
})

const superAdminProtect = asyncHandler(async (req, res, next) => {
  if (req.user.role == 'super_admin') {
    next()
  } else {
    res.status(401)
    throw new Error('Not authorized, not a super_admin')
  }
})


module.exports = { protect , patientProtect , healthProProtect , superAdminProtect }