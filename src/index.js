// importar modulo nativo http
const http = require('http');

// importar rotas
const routes = require('./routes');

// **** criar servidor ****
const server = http.createServer((request, response) => {
    console.log(`Request method: ${request.method} | Endpoint: ${request.url}`);

    const route = routes.find((routeObj) => (
        routeObj.endpoint === request.url && routeObj.method === request.method
    ));

    if(route){
        route.handler(request, response)
    } else {
        response.writeHead(404, { 'Content-Type' : 'text/html' })
        response.end(`Cannot ${request.method} ${request.url}`)
    }
});

//  **** escutar as requisições ****

server.listen(3000, () => console.log('server started at http://localhost:3000')) 