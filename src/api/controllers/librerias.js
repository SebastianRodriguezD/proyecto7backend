// segunda colección
const librerias = require('../models/librerias')

const postLibrerias = async (req, res, next) => {
  try {
    const { name, location, contact, libros } = req.body

    // Eliminar IDs duplicados
    const uniqueLibrosIds = [...new Set(libros)]

    // Verificar si alguno de los libros ya está asociado con otra libreria
    const existingLibreria = await librerias.findOne({
      libros: { $in: uniqueLibrosIds }
    })
    if (existingLibreria) {
      return res
        .status(400)
        .json('Uno o más libros ya están asociados a otra libreria')
    }

    const newLibreria = new librerias({
      name,
      location,
      contact,
      libros: uniqueLibrosIds
    })

    const libreriaSaved = await newLibreria.save()
    return res.status(201).json(libreriaSaved)
  } catch (error) {
    return res.status(400).json('ha fallado la creación')
  }
}

const getLibrerias = async (req, res, next) => {
  try {
    const allLibrerias = await librerias.find().populate('libros')
    return res.status(200).json(allLibrerias)
  } catch (error) {
    return res.status(400).json('ha fallado la busqueda')
  }
}

const getLibreriasId = async (req, res, next) => {
  try {
    const { id } = req.params
    const libreriasId = await librerias.findById(id).populate('libros')
    return res.status(200).json(libreriasId)
  } catch (error) {
    return res.status(400).json('ha fallado la busqueda')
  }
}

const updatelibrerias = async (req, res, next) => {
  try {
    const { id } = req.params

    // Obtener la libreria actual
    const currentLibreria = await librerias.findById(id)
    if (!currentLibreria) {
      return res.status(404).json('Libreria no encontrada')
    }

    // Verificar si se proporcionan libros y procesarlos
    if (req.body.libros) {
      // Eliminar IDs duplicados
      const uniqueLibroIds = [...new Set(req.body.libros)]

      // Verificar si alguno de los libros ya está asociado con otra libreria diferente
      const existingLibreria = await librerias.findOne({
        _id: { $ne: id },
        libros: { $in: uniqueLibroIds }
      })
      if (existingLibreria) {
        return res
          .status(400)
          .json('Uno o más libros ya están asociados a otra libreria')
      }

      // Actualizar libros en la libreria
      currentLibreria.libros = uniqueLibroIds
    }

    // Actualizar solo los campos proporcionados
    if (req.body.name !== undefined) {
      currentLibreria.name = req.body.name
    }
    if (req.body.location !== undefined) {
      currentLibreria.location = req.body.location
    }
    if (req.body.contact !== undefined) {
      currentLibreria.contact = req.body.contact
    }

    // Guardar la libreria actualizada en la base de datos
    const updatedLibreria = await currentLibreria.save()

    return res.status(200).json(updatedLibreria)
  } catch (error) {
    return res.status(400).json('Ha fallado la actualización')
  }
}

const deletelibrerias = async (req, res, next) => {
  try {
    const { id } = req.params
    await librerias.findByIdAndDelete(id)
    return res.status(200).json('elemento eliminado')
  } catch (error) {
    return res.status(400).json('ha fallado la eliminación del elemento')
  }
}

module.exports = {
  getLibrerias,
  getLibreriasId,
  postLibrerias,
  updatelibrerias,
  deletelibrerias
}
