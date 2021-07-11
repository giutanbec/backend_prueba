const logicaDB = require('./logicaDB');

const crearEgreso = async (req, res) =>{
      let Egreso = req.body;
      try {
          let respuesta = await logicaDB.crearEgresoDB(Egreso);
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
    crearEgreso,
}