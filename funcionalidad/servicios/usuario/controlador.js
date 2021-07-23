const logicaDB = require('./logicaDB');

const crearUsuario = async (req, res) =>{
      let usuario = req.body;
      try {
          let respuesta = await logicaDB.crearUsuarioDB(usuario);
          res.status(200).json({
              'usuario': respuesta
          });
          return;
      } catch (error) {
         res.status(500).json({
             error
         });
         return;
      }
};

const obtenerUsuario = async (req, res) =>{
    let usuario = req.body;
    try {
        let respuesta = await logicaDB.obtenerUsuarioDB(usuario);
        res.status(200).json({
            'usuarios': respuesta
        });
        return;
    } catch (error) {
       res.status(500).json({
           error
       });
       return;
    }
};

const eliminarUsuario = async (req, res) =>{
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
    crearUsuario,
    obtenerUsuario,
    eliminarUsuario,
}