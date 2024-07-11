const mongoose = require('mongoose')

const librarySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    contact: { type: String, required: true },
    libros: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'libros',
        required: true,
        unique: true
      }
    ]
  },
  {
    timestamps: true,
    collection: 'librerias'
  }
)

librarySchema.index(
  { name: 1, location: 1, contact: 1, libros: 1 },
  { unique: true }
)

const librerias = mongoose.model('librerias', librarySchema, 'librerias')

module.exports = librerias
