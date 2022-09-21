// importar o módulo express
const express = require("express");

// método Router para lidar com as rotas
const rotas = express.Router();

// GET
rotas.get("/", (req, res) => {
  res.send("Veiculo - GET");
});

// POST
rotas.post("/", (req, res) => {
  res.send("Veiculo - POST");
});

// PUT
rotas.put("/", (req, res) => {
  res.send("Veiculo - PUT");
});

// DELETE
rotas.delete("/", (req, res) => {
  res.send("Veiculo - DELETE");
});

// exportar as rotas para veículo
module.exports = rotas;
