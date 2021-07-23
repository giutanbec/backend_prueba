const Egreso = require('./egreso.model');

const crearEgresoDB = async (egreso) => {
    let respuesta = await Egreso.create(egreso);
    return respuesta;

}

const obtenerEgresoDB = async (id_usuario) => {
    let respuesta = await Egreso.find(id_usuario);
    return respuesta;
}

const obtenerEgresoporUsuarioDB = async (_id) => {
    let respuesta = await Egreso.find({'estado': true}).sort({id_usuario:-1});   
    return respuesta; 
}

const eliminarEgresoDB = async (_id) => {
    let respuesta = await Egreso.deleteOne({ _id:'60ec6f6023f22e41b858ae63'});  
    return respuesta; 
}

/** Exportar consultas */
module.exports = { 
    crearEgresoDB,
    obtenerEgresoDB,
    obtenerEgresoporUsuarioDB,
    eliminarEgresoDB
}