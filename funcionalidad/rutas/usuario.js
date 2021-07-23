const express = require('express');
const router = express.Router();
const controlador = require('../servicios/usuario/controlador');

router.post('/crear-usuario',controlador.crearUsuario);
router.get('/obtener-usuarios',controlador.obtenerUsuario);
router.put('/eliminar-usuario/:id',controlador.eliminarUsuario);

module.exports = router;