const logicaDB = require('./logicaDB');

const crearEgreso = async (req, res) =>{
      let egreso = req.body;
      try {
          let respuesta = await logicaDB.crearEgresoDB(egreso);
          res.status(200).json({
              'egreso': respuesta
          });
          return;
      } catch (error) {
         res.status(500).json({
             error
         });
         return;
      }
};



const obtenerEgreso = async (req, res) =>{
    let egreso = req.body;
    try {
        let respuesta = await logicaDB.obtenerEgresoDB(egreso);
        res.status(200).json({
            'egresos': respuesta
        });
        return;
    } catch (error) {
       res.status(500).json({
           error
       });
       return;
    }
};

const obtenerEgresoporUsuario = async (req, res) =>{
    //let egreso = req.body; 
    let id_usuario = req.params.id_usuario;
    console.log(id)
     try {
         let respuesta = await logicaDB.obtenerEgresoporUsuarioDB(id_usuario);
         res.status(200).json({
             'egresos_usuario': respuesta
         });
         return;
     } catch (error) {
        res.status(500).json({
            error
        });
        return;
     }
};



const eliminarEgreso = async (req, res) =>{
    let _id = req.params._id;
    console.log(id)
    _id.deleteOne(_id.id)
    try {
        let respuesta = await logicaDB.eliminarUsuario({ where:{id: eliminarUsuario.id}})
        res.status(200).json ({
            'eliminar-usuario': respuesta
        });
        return;
    } catch (error) {
       res.status(500).json({
           error
       });
       return;
    }
};

//REVISAR

module.exports = {
 crearEgreso,
 obtenerEgreso,
 obtenerEgresoporUsuario,
 eliminarEgreso,
}
