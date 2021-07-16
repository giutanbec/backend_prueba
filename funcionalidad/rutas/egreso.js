const express = require('express');
const router = express.Router();
const controlador = require('../servicios/egreso/controlador');

router.post('/crear-egreso',controlador.crearEgreso);
router.get('/obtener-egresos',controlador.obtenerEgreso);
router.get('/obtener-egresos-usuario/:id',controlador.obtenerEgresoporUsuario);
//router.delete('/eliminar-egreso',controlador.eliminarEgreso);
//http://localhost:3000/api-backend-prueba/egreso/obtener-egresos/fshfs6f78sfghsf86ahhfshdf
//error en index
//verificar obtener-egresos-usuario
//completar eliminar
//postman

module.exports = router;