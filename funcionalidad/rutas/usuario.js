const express = require('express');
const router = express.Router();
const controlador = require('../servicios/usuario/controlador');

router.post('/crear-usuario',controlador.crearUsuario);

module.exports = router;