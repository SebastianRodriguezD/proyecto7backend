const libros = require('../models/libros')

const postLibros = async (req, res, next) => {
  try {
    const newLibro = new libros(req.body)
    if (req.user.rol === 'admin') {
      newLibro.verified = true
    } else {
      newLibro.verified = false
    }
    const librosSaved = await newLibro.save()
    return res.status(201).json(librosSaved)
  } catch (error) {
    return res.status(400).json('ha fallado la publicación del libro')
  }
}

const getLibros = async (req, res, next) => {
  try {
    const allLibros = await libros.find({ verified: true })
    return res.status(200).json(allLibros)
  } catch (error) {
    return res.status(400).json('ha fallado la busqueda')
  }
}

const getLibrosAdmin = async (req, res, next) => {
  try {
    const allLibros = await libros.find({ verified: false })
    return res.status(200).json(allLibros)
  } catch (error) {
    return res.status(400).json('ha fallado la busqueda')
  }
}

const updateLibros = async (req, res, next) => {
  try {
    const { id } = req.params
    const updateData = req.body

    const updatedLibro = await libros.findByIdAndUpdate(
      id,
      { $set: updateData },
      { new: true, runValidators: true }
    )

    if (!updatedLibro) {
      return res.status(404).json('Libro no encontrado')
    }

    return res.status(200).json(updatedLibro)
  } catch (error) {
    return res.status(400).json('ha fallado la actualización del Libro')
  }
}

const deleteLibros = async (req, res, next) => {
  try {
    const { id } = req.params
    await libros.findByIdAndDelete(id)
    return res.status(200).json('elemento eliminado')
  } catch (error) {
    return res.status(400).json('ha fallado la eliminación del elemento')
  }
}

module.exports = {
  deleteLibros,
  getLibros,
  getLibrosAdmin,
  postLibros,
  updateLibros
}
