// importar modulo nativo http
const http = require('http');
const { URL } = require('url');

// importar rotas
const routes = require('./routes');

// **** criar servidor ****
const server = http.createServer((request, response) => {
    // pegar a url do browser e concatenar com a porta
    const parsedUrl = new URL(`http://localhost:3000${request.url}`)

    // criar variavel para pegar o caminho da url
    let { pathname } = parsedUrl;

    // criar variável id para pegar o id da url
    let id = null;  

    // criar constante para dividir a url em partes
    const splitEndpoint = pathname.split('/').filter(Boolean);

    //  criar condicional para chamada da rota
    if(splitEndpoint.length > 1) {
        // se o tamanho do array for maior que 1, o caminho da url é o primeiro elemento do array
        pathname = `/${splitEndpoint[0]}/:id`;
        id = splitEndpoint[1];
    }

    const route = routes.find((routeObj) => (
        routeObj.endpoint === pathname && routeObj.method === request.method
    ));

    if(route){
        request.query = parsedUrl.query;
        request.params = { id };
        route.handler(request, response)
    } else {
        response.writeHead(404, { 'Content-Type' : 'text/html' })
        response.end(`Cannot ${request.method} ${parsedUrl.pathname}`)
    }
});

//  **** escutar as requisições ****

server.listen(3000, () => console.log('server started at http://localhost:3000')) 

