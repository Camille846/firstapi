// importar modulo nativo http
const http = require('http');
const { URL } = require('url');

// importar rotas
const routes = require('./routes');

// **** criar servidor ****
const server = http.createServer((request, response) => {
    // pegar a url do browser e concatenar com a porta
    const parsedUrl = new URL(`http://localhost:3000${request.url}`)
    console.log(parsedUrl);
    console.log(`Request method: ${request.method} | Endpoint: ${parsedUrl.pathname}`);

    const route = routes.find((routeObj) => (
        routeObj.endpoint === parsedUrl.pathname && routeObj.method === request.method
    ));

    if(route){
        // Utiliza-se object.fromEntries para transformar o objeto de query string em um objeto javascript
        request.query = Object.fromEntries(parsedUrl.searchParams)
        route.handler(request, response)
    } else {
        response.writeHead(404, { 'Content-Type' : 'text/html' })
        response.end(`Cannot ${request.method} ${parsedUrl.pathname}`)
    }
});

//  **** escutar as requisições ****

server.listen(3000, () => console.log('server started at http://localhost:3000')) 

