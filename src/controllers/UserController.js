const users = require('../mocks/users');

module.exports = { 
    listUsers: (req, res) => {
        response.writeHead(200, { 'Content-Type' : 'application/json' })
        response.end(JSON.stringify(users))
    },
}