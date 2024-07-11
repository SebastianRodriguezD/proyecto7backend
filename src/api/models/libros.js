const mongoose = require('mongoose')

const libroSchema = new mongoose.Schema(
  {
    imgUrl: { type: String, required: true },
    title: { type: String, required: true },
    author: { type: String, required: true },
    publicationDate: { type: Number, required: true },
    verified: { type: Boolean, required: true, default: false }
  },
  {
    timestamps: true,
    collection: 'libros'
  }
)

libroSchema.index(
  { imgUrl: 1, title: 1, author: 1, publicationDate: 1 },
  { unique: true }
)

const libros = mongoose.model('libros', libroSchema, 'libros')
module.exports = libros
