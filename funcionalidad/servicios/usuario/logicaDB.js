const Usuario = require('./usuario.model');

const crearUsuarioDB = async (Usuario) => {
    let respuesta = await Usuario.create(Usuario);
    return respuesta;

}

const obtenerUsuarioDB = async () => {
    let respuesta = await Usuario.find();
    return respuesta;
}

/** Exportar consultas */
module.exports = { 
    crearUsuarioDB,
    obtenerUsuarioDB,
}