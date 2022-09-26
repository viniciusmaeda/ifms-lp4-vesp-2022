// pacote "http" -> requisições e respostas do usuário
const http = require("http");

// criando um servidor http
const server = http.createServer((requisicao, resposta) => {
  // configurando a resposta como se fosse uma página HTML
  resposta.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

  // o parâmetro "requisicao" possui um atributo chamado "method"
  // com ele é possível saber qual o método (GET, PUT, etc) foi feito a requisição
  // com isso é feito a verificação (if-else) para saber o que fazer
  if (requisicao.method === "GET") {
    // responde com uma mensagem em HTML
    resposta.write("<h1>GET</h1>");
  } else if (requisicao.method === "POST") {
    // responde com uma mensagem em HTML
    resposta.write("<h1>POST</h1>");
  } else if (requisicao.method === "PUT") {
    // responde com uma mensagem em HTML
    resposta.write("<h1>PUT</h1>");
  } else if (requisicao.method === "DELETE") {
    // responde com uma mensagem em HTML
    resposta.write("<h1>DELETE</h1>");
  }

  // finaliza a resposta
  resposta.end();
});

// este comando é utilizado para definir uma porta de acesso ao servidor
server.listen(3000, console.log("Servidor rodando...."));
