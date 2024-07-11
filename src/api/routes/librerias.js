const { isAdmin } = require('../../middlewares/auth')
const {
  getLibreriasId,
  getLibrerias,
  postLibrerias,
  deletelibrerias,
  updatelibrerias
} = require('../controllers/librerias')

const libreriasRoutes = require('express').Router()
libreriasRoutes.get('/:id', getLibreriasId)
libreriasRoutes.get('/', getLibrerias)
libreriasRoutes.post('/', [isAdmin], postLibrerias)
libreriasRoutes.delete('/:id', [isAdmin], deletelibrerias)
libreriasRoutes.put('/:id', [isAdmin], updatelibrerias)

module.exports = libreriasRoutes
