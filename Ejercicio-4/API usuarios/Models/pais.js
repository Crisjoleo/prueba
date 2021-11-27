var mongoose = require("mongoose");

var esquemaPais = new mongoose.Schema({
  pais: String,
  iso: String,
  codigo: Number,
  creado: Date,
  actualizado: Date,
});

module.exports = mongoose.model("Pais", esquemaPais);
