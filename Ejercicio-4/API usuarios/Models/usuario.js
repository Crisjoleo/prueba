var mongoose = require("mongoose");

var esquemaPuntaje = new mongoose.Schema({
  nombre: String,
  edad: Number,
  activo: Boolean,
  pais: String,
  usuario: String,
  contrasenia: String,
});

module.exports = mongoose.model("Usuario", esquemaPuntaje);
