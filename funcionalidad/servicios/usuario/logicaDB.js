const Usuario = require('./usuario.model');

const crearUsuarioDB = async (usuario) => {
    let respuesta = await Usuario.create(usuario);
    return respuesta;

}

const obtenerUsuarioDB = async () => {
    let respuesta = await Usuario.find();
    return respuesta;
}


//REVISAR
const eliminarUsuarioDB = async (_id) => {
    let respuesta = await Usuario.deleteOne({ _id:'60ec5e72391a523cc4208d5b'});  
    return respuesta; 
}


//REVISAR

/** Exportar consultas */
module.exports = { 
    crearUsuarioDB,
    obtenerUsuarioDB,
    eliminarUsuarioDB
}