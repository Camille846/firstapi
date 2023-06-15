// importar modulo nativo http
const http = require('http');

// **** criar servidor ****
const server = http.createServer((request, response) => {
    // enviar um header com o tipo de conteúdo que será enviado na resposta
    response.writeHead(200, { 'Content-Type' : 'text/html' })
    // enviar o html como resposta
    response.end('<h1>Hello world!</h1>')
});

//  **** escutar as requisições ****

server.listen(3000, () => console.log('server started at http://localhost:3000'))