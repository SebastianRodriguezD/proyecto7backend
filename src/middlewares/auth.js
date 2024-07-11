const User = require('../api/models/user')
const { verifyJwt } = require('../config/jwt')

const isAdmin = async (req, res, next) => {
  try {
    const token = req.headers.authorization
    const parsedToken = token.replace('Bearer ', '')

    const { id } = verifyJwt(parsedToken)

    const user = await User.findById(id)

    if (user.rol === 'admin') {
      user.password = null
      req.user = user
      next()
    } else {
      return res.status(400).json('Esta acción es para un administrador.')
    }
  } catch (error) {
    return res.status(400).json('no estas autorizado')
  }
}
const isAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization
    const parsedToken = token.replace('Bearer ', '')

    const { id } = verifyJwt(parsedToken)

    const user = await User.findById(id)

    user.password = null
    req.user = user
    next()
  } catch (error) {
    return res.status(400).json('no estas autorizado')
  }
}

module.exports = { isAdmin, isAuth }
