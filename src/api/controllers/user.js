const { generateSign } = require('../../config/jwt')
const User = require('../models/user')
const bcrypt = require('bcrypt')

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find()
    return res.status(200).json(users)
  } catch (error) {
    return res.status(400).json('no se puede localizar usuario')
  }
}

const register = async (req, res, next) => {
  try {
    const newUser = new User({
      userName: req.body.userName,
      password: req.body.password,
      rol: 'user'
    })

    const duplicateUser = await User.findOne({ userName: req.body.userName })

    if (duplicateUser) {
      return res.status(400).json('el nombre de usuario ya existe')
    }

    const userSaved = await newUser.save()
    return res.status(202).json(userSaved)
  } catch (error) {
    return res.status(400).json('no se resgistro el usuario correctamente.')
  }
}

const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ userName: req.body.userName })

    if (!user) {
      return res.status(400).json('Este usuario no existe')
    }
    if (bcrypt.compareSync(req.body.password, user.password)) {
      const token = generateSign(user._id)
      return res.status(202).json({ user, token })
    } else {
      return res.status(400).json('El usuario o Contraseña no son correctos. ')
    }
  } catch (error) {
    return res.status(400).json('no se inició sección correctamente.')
  }
}

const updateUsers = async (req, res, next) => {
  try {
    const { id } = req.params
    const updateData = req.body

    const updatedUsers = await User.findByIdAndUpdate(
      id,
      { $set: updateData },
      { new: true, runValidators: true }
    )

    if (!updatedUsers) {
      return res.status(404).json('Usuario no encontrado')
    }

    return res.status(200).json(updatedUsers)
  } catch (error) {
    return res.status(400).json('ha fallado la actualización del usuario')
  }
}
const deleteUsers = async (req, res, next) => {
  try {
    const { id } = req.params
    const requestingUser = req.user

    if (
      requestingUser.rol === 'admin' ||
      requestingUser._id.toString() === id
    ) {
      await User.findByIdAndDelete(id)
      return res.status(200).json('Usuario eliminado')
    } else {
      return res
        .status(403)
        .json('No tienes permisos para eliminar este usuario')
    }
  } catch (error) {
    return res.status(400).json('Ha fallado la eliminación del usuario')
  }
}
module.exports = { getUsers, register, login, updateUsers, deleteUsers }
