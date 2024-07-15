const mongoose = require('mongoose')
const libros = require('../../api/models/libros')

mongoose
  .connect(
    'mongodb+srv://sebastianrodriguezd:NyJf53UsyIFGvhJ6@cluster0.3f5cwry.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
  )
  .then(async () => {
    const alllibros = await libros.find()
    if (alllibros.length) {
      await libros.collection.drop()
      console.log('libros eliminados')
    }
  })
  .catch((err) => console.log(`Error deleting data: ${err}`))
  .then(async () => {
    await libros.insertMany(libros)
    console.log('libros Introducidos')
  })
  .catch((err) => console.log(`Error creating data: ${err}`))
  .finally(() => mongoose.disconnect(console.log('desconectado de la bbdd')))
