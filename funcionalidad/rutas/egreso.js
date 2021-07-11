const express = require('express');
const router = express.Router();
const controlador = require('../servicios/egreso/controlador');

router.post('/crear-egreso',controlador.crearEgreso);

module.exports = router;