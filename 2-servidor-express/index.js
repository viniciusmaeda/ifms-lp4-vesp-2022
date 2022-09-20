// importando o express para a aplicação. Maiores explicação no final do arquivo
const express = require("express");

// iniciando a aplicação com a função express()
const app = express();

/********************************************************/
// ROTA PADRÃO

// definição da rota para o método GET
app.get("/", (req, res) => {
  // endereço de acesso: http://localhost:3000/
  res.send("Página inicial");
});

/********************************************************/
// ROTAS PARA OS VEÍCULOS

// definição da rota para o método GET
// utilizado para obter dados/página de um servidor
app.get("/veiculo", (req, res) => {
  // endereço de acesso: http://localhost:3000/veiculo
  res.send("Veículo - get");

  // aqui será implementado o código para  para buscar os dados dos veículos
});

// definição da rota para o método POST
// utilizado para criar algo novo no servidor (BD)
app.post("/veiculo", (req, res) => {
  // endereço de acesso: http://localhost:3000/veiculo
  res.send("Veículo - post");

  // aqui será implementado o código para salvar veículos
});

// definição da rota para o método PUT
// utilizado para atualizar algo existente
app.put("/veiculo", (req, res) => {
  // endereço de acesso: http://localhost:3000/veiculo
  res.send("Veículo - put");

  // aqui será implementado o código para atualizar dados de veículo existente
});

// definição da rota para o método DELETE
// utilizado para excluir algo existente
app.delete("/veiculo", (req, res) => {
  // endereço de acesso: http://localhost:3000/veiculo
  res.send("Veículo - delete");

  // aqui será implementado o código para excluir um veículo
});

// número da porta em que o servidor irá rodar
const port = 3000;
app.listen(port, console.log(`Servidor rodando na porta ${port}`));

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
