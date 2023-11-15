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
        response.send(200, sortedUsers);
    },
    getUserById: (request, response) => {
        // pegar o id da url
        const { id } = request.params
        // procurar o usuario pelo id
        const user = users.find((user) => user.id === Number(id))

        if(!user) {
            return response.send(400, { error: 'User not found' })
        }

        response.send(200, user)
    },
    createUser(request, response) {
        // pegar os dados do usuario
        let body = '';

        // quando chegar a informação, receber dentro de chunk e concatenar com body 
        request.on('data', (chunk) => {
            body += chunk;
        });

        // Quando finalizar a resposta, pegar o body e converter para JSON
        request.on('end', () => {
            body = JSON.parse(body);

            // pegar o ultimo id do array e adicionar 1
            const lastUserId = users[users.length - 1].id;
            const newUser = {
                id: lastUserId + 1,
                name: body.name,
            }

            // adicionar o novo usuario no array de usuarios
            users.push(newUser);

            response.send(200, newUser);
        });
    },
}