// importando o express para a aplicação. Maiores explicação no final do arquivo
const express = require("express");

// iniciando a aplicação com a função express()
const app = express();

/********************************************************/
// ROTA PADRÃO

// definição da rota para o método GET
app.get("/", (req, res) => {
  // endereço de acesso: http://localhost:3000/
  res.send("Home");
});

/********************************************************/
// ROTAS PARA OS MODELOS DE VEÍCULOS

// definição da rota para o método GET
app.get("/model", (req, res) => {
  // endereço de acesso: http://localhost:3000/model
  res.send("Model - get");

  // aqui será utilizado para buscar os dados dos veículos
});

// definição da rota para o método POST
app.post("/model", (req, res) => {
  // endereço de acesso: http://localhost:3000/model
  res.send("Model - post");

  // aqui será utilizado para salvar veículos
});

// definição da rota para o método PUT
app.put("/model", (req, res) => {
  // endereço de acesso: http://localhost:3000/model
  res.send("Model - put");

  // aqui será utilizado para atualizar dados de veículos
});

// definição da rota para o método DELETE
app.delete("/model", (req, res) => {
  // endereço de acesso: http://localhost:3000/model
  res.send("Model - delete");

  // aqui será utilizado para excluir veículos
});

// número da porta em que o servidor irá rodar
const port = 3000;
app.listen(port, () => console.log(`Running on port ${port}`));

/**
 * Express
 *
 * O Express é um framework que permite que possamos criar um Servidor
 * Web para aplicações Web. Ele tem sido bastante utilizado para criações
 * de API Rest e aplicações Web. Considerado minimalista e simples, porém
 * contém um conjunto de configurações robustas e seguras.
 *
 * Para maiores informações, acesse o material abaixo.
 * https://expressjs.com/pt-br/
 */
