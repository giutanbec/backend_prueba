const express = require('express');
const router = express.Router();
const controlador = require('../servicios/egreso/controlador');

router.post('/crear-egreso',controlador.crearEgreso);
router.get('/obtener-egresos',controlador.obtenerEgreso);
router.get('/obtener-egresos-usuario/:id',controlador.obtenerEgresoporUsuario);
router.put('/eliminar-egreso/:id',controlador.eliminarEgreso);
//http://localhost:3000/api-backend-prueba/egreso/obtener-egresos/fshfs6f78sfghsf86ahhfshdf
//verificar obtener-egresos-usuario
//consultar lo del postman

module.exports = router;