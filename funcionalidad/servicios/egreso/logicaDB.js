const Egreso = require('./egreso.model');

const crearEgresoDB = async (egreso) => {
    let respuesta = await Egreso.create(egreso);
    return respuesta;

}

const obtenerEgresoDB = async () => {
    let respuesta = await Egreso.find();
    return respuesta;
}

const obtenerEgresoporUsuarioDB = async () => {
    let respuesta = await Egreso.find({'estado': true}).sort({id_egreso:-1});   
    return respuesta; 
}


/** Exportar consultas */
module.exports = { 
    crearEgresoDB,
    obtenerEgresoDB,
    obtenerEgresoporUsuarioDB,
    //eliminarEgresoDB
}