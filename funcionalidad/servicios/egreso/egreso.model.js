const mongoose = require('mongoose');
const { Schema } = mongoose;

const Egreso = new Schema({
    descripcion:String,
    precio: Number,
});

module.exports = mongoose.model('Egreso', Egreso)