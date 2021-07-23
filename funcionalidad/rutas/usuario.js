const express = require('express');
const router = express.Router();
const controlador = require('../servicios/usuario/controlador');

router.post('/crear-usuario',controlador.crearUsuario);
router.get('/obtener-usuarios',controlador.obtenerUsuario);
router.delete('/eliminar-usuario/:id',controlador.eliminarUsuario);

module.exports = router;