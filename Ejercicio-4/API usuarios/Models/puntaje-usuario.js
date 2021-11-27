var mongoose = require("mongoose");

var esquemaPuntaje = new mongoose.Schema({
  usuario: String,
  puntos: Number,
  Fecha: Date,
  Activo: Boolean,
});

module.exports = mongoose.model("Puntaje", esquemaPuntaje);
