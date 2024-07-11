# Proyecto 7 Backend

Este repositorio contiene el código del backend desarrollado para el Proyecto 7. Este proyecto es parte de un curso de desarrollo web y utiliza tecnologías como Node.js, Express.js y MongoDB para implementar una API RESTful que gestiona usuarios, libros y librerías, y ofrece autenticación basada en tokens JWT (JSON Web Tokens).

## Descripción del Proyecto

El Proyecto 7 Backend implementa un servidor Node.js que proporciona una API RESTful para la gestión de usuarios, libros y librerías. Incluye endpoints para registrar y autenticar usuarios, así como para crear, actualizar y eliminar libros y librerías.

## Estructura del Repositorio

El repositorio está estructurado de la siguiente manera:

- **`src/`**: Directorio principal que contiene el código fuente del proyecto.
  - **`controllers/`**: Controladores que manejan las solicitudes HTTP y gestionan la lógica de negocio.
    - `authController.js`: Controlador para la autenticación de usuarios.
    - `user.js`: Controlador para la gestión de usuarios.
    - `libros.js`: Controlador para la gestión de libros.
    - `librerias.js`: Controlador para la gestión de librerías.
  - **`middlewares/`**: Middlewares utilizados en la aplicación.
    - `authMiddleware.js`: Middleware para la verificación del token JWT y la autenticación.
  - **`models/`**: Modelos de datos de la aplicación.
    - `user.js`: Definición del esquema de usuario para interactuar con la base de datos MongoDB.
    - `libros.js`: Definición del esquema de libro para interactuar con la base de datos MongoDB.
    - `librerias.js`: Definición del esquema de librería para interactuar con la base de datos MongoDB.
  - **`routes/`**: Definición de las rutas de la API.
    - `authRoutes.js`: Rutas relacionadas con la autenticación de usuarios.
    - `user.js`: Rutas relacionadas con la gestión de usuarios.
    - `libros.js`: Rutas relacionadas con la gestión de libros.
    - `librerias.js`: Rutas relacionadas con la gestión de librerías.
  - **`config/`**: Configuraciones del proyecto.
    - `config.js`: Configuración del servidor y de la base de datos MongoDB.
    - `jwt.js`: Configuración para la generación y verificación de tokens JWT.
  - **`index.js`**: Punto de entrada de la aplicación Node.js.

## Tecnologías Utilizadas

- Node.js
- Express.js
- MongoDB (con Mongoose para la capa de abstracción de datos)
- JSON Web Tokens (JWT)

## Instrucciones para Clonar y Ejecutar el Proyecto

Para clonar este repositorio y ejecutar el proyecto en tu máquina local, sigue estos pasos:

1. Clona el repositorio utilizando Git:

   ```bash
   git clone https://github.com/SebastianRodriguezD/proyecto7backend.git
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd proyecto7backend
   ```

3. Instala las dependencias del proyecto:

   ```bash
   npm install
   ```

4. Configura las variables de entorno necesarias, como la conexión a la base de datos MongoDB y la configuración del token JWT, en el archivo `config.js`.

5. Ejecuta la aplicación:

   ```bash
   npm start
   ```

6. La aplicación estará disponible en `http://localhost:3000` por defecto.

## Endpoints de la API

### Usuarios

- **Registro de Usuario:**

  - `POST /api/auth/register`
    - Crea un nuevo usuario en la base de datos.

- **Inicio de Sesión:**
  - `POST /api/auth/login`
    - Inicia sesión y genera un token JWT válido.

### Libros

- **Listar Libros:**

  - `GET /api/libros`
    - Obtiene todos los libros almacenados.

- **Crear Libro:**

  - `POST /api/libros`
    - Crea un nuevo libro en la base de datos.

- **Actualizar Libro:**

  - `PUT /api/libros/:id`
    - Actualiza la información de un libro específico.

- **Eliminar Libro:**
  - `DELETE /api/libros/:id`
    - Elimina un libro específico de la base de datos.

### Librerías

- **Listar Librerías:**

  - `GET /api/librerias`
    - Obtiene todas las librerías almacenadas.

- **Crear Librería:**

  - `POST /api/librerias`
    - Crea una nueva librería en la base de datos.

- **Actualizar Librería:**

  - `PUT /api/librerias/:id`
    - Actualiza la información de una librería específica.

- **Eliminar Librería:**
  - `DELETE /api/librerias/:id`
    - Elimina una librería específica de la base de datos.

## Notas Adicionales

- Asegúrate de tener Node.js y npm instalados en tu sistema antes de comenzar.
- Revisa los archivos de configuración y ajusta según sea necesario para tu entorno de desarrollo.
- Para más detalles sobre el código y su funcionamiento, revisa los comentarios dentro de los archivos fuente en el repositorio.

Gracias
