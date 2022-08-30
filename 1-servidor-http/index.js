// pacote "http" -> requisições e respostas do usuário
const http = require("http");

// criando um servidor http
const server = http.createServer((requisicao, resposta) => {

    // configurando a resposta como se fosse uma página HTML
    resposta.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

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


    resposta.end();

});

server.listen(4000, console.log("Servidor rodando...."))


// // função normal em JS
// function nome(parametroA, parametroB) {
//     return null;
// }

// // funcao anônima arrow function
// const funcaoAnonima = (parametroA, parametroB) => {
//     return null;
// }
