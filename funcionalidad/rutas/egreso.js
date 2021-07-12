const express = require('express');
const router = express.Router();
const controlador = require('../servicios/egreso/controlador');

router.post('/crear-egreso',controlador.crearEgreso);
router.post('/obtener-egresos',controlador.obtenerEgreso);

module.exports = router;