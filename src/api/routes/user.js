const { isAuth, isAdmin } = require('../../middlewares/auth')
const {
  getUsers,
  register,
  login,
  updateUsers,
  deleteUsers
} = require('../controllers/user')
const usersRoutes = require('express').Router()

usersRoutes.get('/', [isAdmin], getUsers)
usersRoutes.post('/register', register)
usersRoutes.post('/login', login)
usersRoutes.put('/:id', [isAdmin], updateUsers)
usersRoutes.delete('/:id', [isAuth], deleteUsers)

module.exports = usersRoutes
