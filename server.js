// Importación del módulo Express.js
const express = require("express");
const cors = require("cors");
require("./database");
const routes = require("./routes/routes");

// Creación de una instancia de Express
const app = express();
// Habilita el middleware CORS
const corsOptions = {
  origin: "*", // Permitir solo un dominio específico
  methods: "GET,POST", // Permitir solo GET y POST
  optionsSuccessStatus: 200, // Algunas versiones de navegador requieren esto
};

app.use(cors(corsOptions));

require("./database");
// Middleware para analizar solicitudes JSON y URL codificada
app.use(express.json()); // Permite analizar solicitudes con formato JSON
app.use(express.urlencoded({ extended: true })); // Permite analizar solicitudes con datos codificados en la URL

// Configuración del puerto del servidor
var port = process.env.PORT || 8080; // Utiliza el puerto definido en la variable de entorno PORT o el puerto 8080 como valor predeterminado

app.use("/", routes);

// Inicio del servidor Express
app.listen(port); // Inicia el servidor en el puerto especificado
console.log("API escuchando en el puerto " + port); // Muestra un mensaje en la consola indicando en qué puerto se encuentra escuchando

//mongodb://localhost:27017
