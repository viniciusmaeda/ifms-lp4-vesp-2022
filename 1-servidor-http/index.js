// pacote "http" -> requisições e respostas do usuário. Ao final do arquivo,
// maiores explicações
const http = require("http");

// criando um servidor http
const server = http.createServer((requisicao, resposta) => {
  // configurando a resposta como se fosse uma página HTML
  resposta.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

  // diversos exemplos de respostas contendo elementos HTML
  resposta.write("<h1>Minha página</h1>");
  resposta.write("<p>Este é um parágrafo HTML.</p>");
  resposta.write(`
    <ul>
        <li>Opcao A</li>
        <li>Opcao B</li>
        <li>Opcao C</li>
    </ul>
  `);
  resposta.write(`
    <ol>
        <li>Opcao A</li>
        <li>Opcao B</li>
        <li>Opcao C</li>
    </ol>
  `);

  // finaliza a resposta
  resposta.end();
});

// este comando é utilizado para definir uma porta de acesso ao servidor
server.listen(4000, console.log("Servidor rodando...."));

/**
 * Módulo HTTP (NodeJS)
 *
 * Toda vez que atualizamos uma página no navegador, estamos realizando uma
 * solicitação de dados para outro computador (servidor). Esse servidor deverá
 * responder, fornecendo dados para montar uma página web. Esse computador
 * que acessamos é conhecido como Servidor Web e as solicitações são denominadas
 * HTTP. Os dados de resposta podem ser uma página HTML ou dados no formato JSON.
 *
 * O NodeJS possui um módulo que nos permite criar um Servidor Web. Este módulo
 * é chamado de "http". O código acima, temos um exemplo de como cria um Servidor
 * Web simples.
 *
 * Para maiores informações, você poderá consultar o material abaixo.
 * https://nodejs.org/api/http.html
 * https://www.w3schools.com/nodejs/nodejs_http.asp
 *
 */
