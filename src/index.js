// importar modulo nativo http
const http = require('http');

// importar users 
const users = require('./mocks/users');

// **** criar servidor ****
const server = http.createServer((request, response) => {
    // console.log('request', request.url)
    if(request.url === "./users" && request.method === "GET"){
        response.writeHead(200, { 'Content-Type' : 'application/json' })
        response.end(JSON.stringify(users))
    } else {
        response.writeHead(404, { 'Content-Type' : 'text/html' })
        response.end(`Cannot ${request.method} ${request.url}`)
    }
});

//  **** escutar as requisições ****

server.listen(3000, () => console.log('server started at http://localhost:3000')) 