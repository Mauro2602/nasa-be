//Importaciones
const express = require('express');
const router = express.Router();
const UsuarioController = require('../controller/UsuarioController');
const VoluntarioController = require('../controller/VoluntarioController');
const AlertasController = require('../controller/AlertasController');
const PuntosController = require('../controller/PuntosController');
const VideosController = require('../controller/VideosController');


//ruta que permite CREAR un USUARIO
router.post('/users', UsuarioController.create);
router.post('/users/volunters', VoluntarioController.create);
router.post('/alerts', AlertasController.create);
router.post('/points', PuntosController.create);
router.post('/video', VideosController.create);
//ruta que permite OBTENER informacion 
router.get('/obtain/users', UsuarioController.getData);
router.get('/obtain/volunters', VoluntarioController.getData);
router.get('/obtain', PuntosController.getData);
router.get('/tittle', VideosController.getData);
router.get('/alerts', AlertasController.getData);

module.exports = router;