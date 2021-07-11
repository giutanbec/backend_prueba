const Egreso = require('./egreso.model');

const crearEgresoDB = async (Egreso) => {
    let respuesta = await Egreso.create(Egreso);
    return respuesta;

}

const obtenerEgresoDB = async () => {
    let respuesta = await Egreso.find();
    return respuesta;
}

/** Exportar consultas */
module.exports = { 
    crearEgresoDB,
    obtenerEgresoDB,
}