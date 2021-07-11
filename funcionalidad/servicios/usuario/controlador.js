const logicaDB = require('./logicaDB');

const crearUsuario = async (req, res) =>{
      let Usuario = req.body;
      try {
          let respuesta = await logicaDB.crearUsuarioDB(Usuario);
          res.status(200).json({
              'registro': respuesta
          });
          return;
      } catch (error) {
         res.status(500).json({
             error
         });
         return;
      }
}

module.exports = {
    crearUsuario,
}