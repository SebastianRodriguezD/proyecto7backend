const { isAuth, isAdmin } = require('../../middlewares/auth')
const {
  getLibros,
  postLibros,
  deleteLibros,
  updateLibros,
  getLibrosAdmin
} = require('../controllers/libros')

const libroRoutes = require('express').Router()

libroRoutes.get('/', getLibros)
libroRoutes.get('/not-verified', [isAdmin], getLibrosAdmin)
libroRoutes.post('/', [isAuth], postLibros)
libroRoutes.delete('/:id', [isAdmin], deleteLibros)
libroRoutes.put('/:id', [isAdmin], updateLibros)

module.exports = libroRoutes
