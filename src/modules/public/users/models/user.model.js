const mongoose = require('mongoose')

const Schema = mongoose.Schema
const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const emailValidation = email => emailPattern.test(email)
const UserSchema = new Schema({
  email: {
    type: String,
    unique: 'Email already exists',
    required: 'Email address is required',
    validate: [emailValidation, 'Invalid email address format']
  },
  password: {
    type: String,
    required: 'Password is required'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date
  },
  active: {
    type: Boolean,
    default: true
  }
})

mongoose.model('User', UserSchema)
