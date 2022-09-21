// importar o módulo express
const express = require("express");

// importar as rotas da aplicação
const veiculoRotas = require("./routes/Veiculo");
const proprietarioRotas = require("./routes/Proprietario");

// instanciar o módulo express
const app = express();

// utilizar as rotas definidas em outro arquivo
app.use("/veiculo", veiculoRotas);
app.use("/proprietario", proprietarioRotas);

// número da porta em que o servidor irá rodar
const port = 3000;
app.listen(port, console.log(`Servidor rodando na porta ${port}`));
