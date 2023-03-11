const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
  {
    name: {
        type: String,
        required: [true, 'Please add a name'],
    },
    email: {
        type: String,
        required: [true, 'Please add an email'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Please add a password'],
    },
    role: {
      type: String,
      enum: ['super_admin', 'physicians_assistants', 'nurses','patient'],
      default: 'patient',
      required: [true, 'Please add a role'],
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('User', userSchema)
