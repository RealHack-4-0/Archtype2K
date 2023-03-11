const mongoose = require('mongoose')

const healthProSchema = mongoose.Schema(
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
      enum: [ 'physicians_assistants', 'nurses', 'physicians', 'super_admin'],
      default: '',
      required: [true, 'Please add a role'],
    },
    verified: {
        type: Boolean,
        default: false,
    }
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('HealthPro', healthProSchema)
