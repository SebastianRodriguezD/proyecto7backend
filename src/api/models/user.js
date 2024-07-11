const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userShema = new mongoose.Schema(
  {
    userName: { type: String, required: true },
    password: { type: String, required: true },
    rol: {
      type: String,
      required: true,
      enum: ['admin', 'user'],
      default: 'user'
    }
  },
  {
    timestamps: true,
    collection: 'users'
  }
)

userShema.pre('save', function () {
  this.password = bcrypt.hashSync(this.password, 10)
})

const User = mongoose.model('users', userShema, 'users')

module.exports = User
