// importar modulo nativo http
const http = require('http');
const url = require('url');

// importar rotas
const routes = require('./routes');

// **** criar servidor ****
const server = http.createServer((request, response) => {
    const parsedUrl = url.parse(request.url, true)
    // console.log(parsedUrl);
    console.log(`Request method: ${request.method} | Endpoint: ${parsedUrl.pathname}`);

    const route = routes.find((routeObj) => (
        routeObj.endpoint === parsedUrl.pathname && routeObj.method === request.method
    ));

    if(route){
        request.query = parsedUrl.query
        route.handler(request, response)
    } else {
        response.writeHead(404, { 'Content-Type' : 'text/html' })
        response.end(`Cannot ${request.method} ${parsedUrl.pathname}`)
    }
});

//  **** escutar as requisições ****

server.listen(3000, () => console.log('server started at http://localhost:3000')) 

