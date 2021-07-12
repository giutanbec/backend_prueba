/**Declaraciones */
const express = require('express')
var cors = require('cors')
const app = express()
var router = express.Router();
require('dotenv').config();
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
/** Fin declaraciones */

const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/** Conexion DB */
mongoose.connect(process.env.DB_SERVER, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Conectado a la DB")
});
/**Fin conexion DB */

/**Rutas Servicios */
const Egreso = require('./funcionalidad/rutas/egreso');

router.use('/egreso',Egreso);

const Usuario = require('./funcionalidad/rutas/usuario');

router.use('/usuario',Usuario);




router.get('/', (req, res) => {
  res.send('Hello World!')
})

/** Fin rutas */

app.use('/api-backend-prueba', router)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})