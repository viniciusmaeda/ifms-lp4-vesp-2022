// pacote "http" -> requisições e respostas do usuário
const http = require("http");

// criando um servidor http
const server = http.createServer((requisicao, resposta) => {
  // configurando a resposta como se fosse uma página HTML
  resposta.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

  // obter a url (endereco)
  const url = requisicao.url;

  // rotas
  if (url == "/") {
    // http://localhost:4000/
    resposta.write("<h1>Página principal</h1>");
  } else if (url == "/cadastro") {
    // http://localhost:4000/cadastro
    resposta.write("<h1>Página de Cadastro</h1>");
  } else if (url == "/sobre") {
    // http://localhost:4000/sobre
    resposta.write("<h1>Página Sobre</h1>");
  } else if (url == "/usuarios") {
    // http://localhost:4000/usuarios
    resposta.write("<h1>Usuários do site</h1>");
  }

  // finaliza a resposta
  resposta.end();
});

// este comando é utilizado para definir uma porta de acesso ao servidor
server.listen(4000, console.log("Servidor rodando...."));
