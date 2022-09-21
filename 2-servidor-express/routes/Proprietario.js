// importar o módulo express
const express = require("express");

// método Router para lidar com as rotas
const rotas = express.Router();

// GET
rotas.get("/", (req, res) => {
  res.send("Proprietário - GET");
});

// POST
rotas.post("/", (req, res) => {
  res.send("Proprietário - POST");
});

// PUT
rotas.put("/", (req, res) => {
  res.send("Proprietário - PUT");
});

// DELETE
rotas.delete("/", (req, res) => {
  res.send("Proprietário - DELETE");
});

// exportar as rotas para veículo
module.exports = rotas;
