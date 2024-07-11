PROYECTO 6 API REST

En este proyecto, ponemos en practica lo aprendido en la sección de backend en el curso de ROCK THE CODE. Aplicamos los conococimientos adquiridos en:

-como crear una estrucura ideal para un proyecto backend
-la utilización correcta de la librería de express para crear esta API.
-la creación, conexión y utilización de una BBDD utilizando moongose.

- y el uso correcto de los modelos, controladores y rutas.

Hemos hecho una simulación de un concesionario, para eso hemos creado una colección de coches y otra relacionada si el coche se han vendido o no.

Requisitos previos

Lo primero que haremos para iniciar el proyecto backend es crear un servidor con la librería express.

- Ejecutamos npm init -y para crear nuestros package.json
- Instalamos la Libreira npm i -D nodemon
- Cambiamos el nombre del script start a “node index.js” y agregamos el script “dev”: “nodemon index.js”
- Instalamos la Liberia npm i express
- Requerimos express const express = require (“express”)
- Const app = express()
- Const PORT = 3000
- app.use('/', router)
- app.listen(PORT, () => {
- console.log(`Servidor conectado en http://localhost:${PORT}`)
- })

CREAR UN BASE DE DATOS
• Abrir mongo atlas y crear la base de datos, generar credenciales y contraseña y guardar en un archivo .env (ejecutar el comando npm i dotenv -D)
• IP 0.0.0.0/0 IP GLOBLAL, Add Entry
• Connect -> Drivers -> copiar el enlace y pegarlo en el archivo .env
• Cambiar la contraseña quitando las flechas y guardarlo en una variable de entorno
Llamada así “DB_URL”

CONECTARME A UNA BASE DE DATOS

• Src -> api -> config -> middlewares –> utils
• Config -> db.js
• Instalar la librería mongoose con el comando npm i mongoose (se realiza todo lo que tenga que ver con la base de datos).
• En el archivo db.js requerimos mongoose

Nos traemos el módulo mongoose

- creamos una función asíncrona llamada como queramos, en este caso connectDB
- creamos un bloque trycatch ya que algo podría fallar y así lo controlamos
- usamos await porque el proceso de conectarse será asíncrono y utilizamos el método connect de mongoose el cual le aportamos la url de la BBDD que la cogemos desde el .env
- exportamos la función para poder usarla en el index.js
- Instalamos la Liberia npm i dotenv permite acceder a nuestras variables de entorno (se debería siempre confirgurar en la línea 1 de nuetsro index.js)

FUNCIONES DE LOS ENDPOINTS

EN MODELOS:

1. El modelo de los coches que irán en nuestra BBDD. no se podrán duplicar si ya están en la base de datos.
2. El modelo de las ventas que se relaciona con cada coche e indica si esta vendido o no y en que año.

EN CONTROLADORES:

1. coches.js

Tenemos un CRUD completo para poder, publicar, actualizar, eliminar o requerir un coche.

getCoches: Busca todos los coches disponibles que hay en nuestra BBDD.
postCoches: Publica un nuevo coche sino esta en la BBDD.
deleteCoches: Elimina un coche si está en la BBDD
updateCoches: Actualiza alguna información o dato que esté en la BBDD

2. ventas.js

Tenemos un CRUD completo para poder, publicar, actualizar, eliminar o requerir una venta.

getVentas: Busca todas las ventas que se han realizado o que no se han realizado de los coches.
getVentasId: Busca un coche por ID y verifica si se ha vendido o no.
postVentas: publica una nueva venta.
updateVentas: actualiza una venta:
deleteVentas: Elimina una Venta.

EN RUTAS

1. coches.js
   Importamos las funciones CRUD de coches. le añadimos el metodo de rutas de express y le damos una dirección con sus metodos HTTP correspondiente:

- cochesRoutes.get('/', getCoches)
- cochesRoutes.post('/', postCoches)
- cochesRoutes.delete('/:id', deleteCoches)
- cochesRoutes.put('/:id', updateCoches)

2. ventas.js
   Importamos las funciones CRUD de ventas. le añadimos el metodo de rutas de express y le damos una dirección con sus metodos HTTP correspondiente:

ventasRoutes.get('/:id', getVentasId)
ventasRoutes.get('/', getVentas)
ventasRoutes.post('/', postVentas)
ventasRoutes.delete('/:id', deleteVentas)
ventasRoutes.put('/:id', updateVentas)

En nuestro index.js deberíamos tener lo siguiente para nuestro servidor funcione correctamente:

- la configuración del dotenv, que nos permitira leer los archivos .env
- requerimos: express, la función de la conexión a la BBDD, y las rutas que hemos creado.

const app = express()
connectDB()
app.use(express.json())

app.use('/api/v1/coches', cochesRoutes)
app.use('/api/v1/ventas', ventasRoutes)

app.use('/ping', (req, res, next) => {
res.status(202).json('pong')
})

app.use('\*', (req, res, next) => {
return res.status(404).json('Route not found')
})

app.listen(3000, () => {
console.log('Servidor levantado en: http://localhost:3000')
})

de esta manera tendríamos nuestro proyecto levantado y andando correctamente.

Gracias, Sebastian Rodriguez.
