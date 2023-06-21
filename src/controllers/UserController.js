const users = require('../mocks/users');

module.exports = { 
    listUsers: (request, response) => {
        // pegar a query string da url e o destruturing para pegar o parametro order 
        const { order } = request.query
        // criar função para ordenar os usuarios e se o order for desc, ordenar de forma decrescente, se não, ordenar de forma crescente
        const sortedUsers = users.sort((a,b) => {
            if(order === 'desc') {
                return a.id < b.id ? 1 : -1;
            }

            return a.id > b.id ? 1 : -1;
        })


        response.writeHead(200, { 'Content-Type' : 'application/json' })
        // Mostrar o array de usuarios ordenado
        response.end(JSON.stringify(sortedUsers))
    },
}