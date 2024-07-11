require('dotenv').config()
const express = require('express')
const { connectDB } = require('./src/config/db')
const libroRoutes = require('./src/api/routes/libros')
const libreriasRoutes = require('./src/api/routes/librerias')
const usersRoutes = require('./src/api/routes/user')

const app = express()
connectDB()
app.use(express.json())

app.use('/api/v1/libros', libroRoutes)
app.use('/api/v1/librerias', libreriasRoutes)
app.use('/api/v1/users', usersRoutes)

app.use('/ping', (req, res, next) => {
  res.status(202).json('help')
})
app.use('*', (req, res, next) => {
  return res.status(404).json('Route not found')
})
app.listen(3000, () => {
  console.log('Servidor conectado en http://localhost:3000')
})
