const express = require('express');
const router = express.Router();
const controlador = require('../servicios/usuario/controlador');

router.post('/crear-usuario',controlador.crearUsuario);
router.post('/obtener-usuarios',controlador.obtenerUsuario);

module.exports = router;