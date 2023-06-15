# Criação de uma API com NodeJS

## Tabela com conteúdos teóricos necessários

- [NodeJS](#NodeJS)
- [API](#api)
- [HTTP](#http)
- [Request](#request)
- [Métodos HTTP](#métodos-http)
- [Response](#response)
- [Código de status](#código-de-status)
- [Padrão REST](#padrão-rest)
- [Módulos](#módulos)
- [NodeJS como servidor](#nodejs-como-servidor)

# Node JS

Primeiramente, é importante ressaltar que NodeJS <strong>não</strong> é uma linguagem de programação, mas sim uma plataforma ou runtime que permite a execução de Javascript no servidor. 

O NodeJs utiliza um interpretador de código chamado de <strong>V8</strong> que converte o código em JavaScript em código executável pela máquina.

Para executar o código, é utilizado uma <strong>Call Stack</strong> que atua como uma pilha de processamento de códigos, onde o primeiro a entrar é o último a sair.

Apesar de suportar operações de entrada e saída assíncronas (non-blocking I/O) e ser capaz de executar código de forma assíncrona, o NodeJS possui apenas uma call stack, o qeu significa que ele executa apenas um código por vez. No entanto, ele possui um <strong>gerenciador de eventos </strong> que permite a execução de vários códigos simultaneamente.

O NodeJS utiliza a <strong>libuv</strong>, que implementa a <strong>Thread Pool</strong> e o <strong>Event Loop</strong>, possibilitando assim, a execução de códigos assíncronos.

A Thread Pool processa operações que são mais demoradas e que bloqueariam o uso da call stack.

As <strong>Callback Queues</strong> funcionam com o método FIFO (First In, First Out), ou seja, a primeira função a entrar é a primeira a sair. Elas são funções que são executadas após a conclusão de uma operação assíncrona. Elas trabalham em conjunto com o <strong></strong>Event Loop, que verifica se a call stack está vazia para executar a próxima função. 
<strong></strong>

# API

API é a sigla para <strong>Application Programming Interface</strong>. Ela permite a conexão de várias aplicações e serviços de diferentes tipos, de forma padronizada e estruturada, em uma mesma fonte de dados.

Ela define um conjunto de regras e endpoints (pontos de acesso) que os desenvolvedores podem utilizar para interagir com o sistema ou serviço que disponibiliza a API. 

# HTTP

HTTP é a sigla para <strong>Hypertext Transfer Protocol</strong>, ou seja, Protocolo de Transferência de Hipertexto. Ele é um protocolo de comunicação que permite a transferência de informações na internet entre clientes e servidores.

# Request

O Request é a requisição feita pelo cliente ao servidor. Ela é formada por blocos de informação que são enviados pelo cliente ao servidor. Esses blocos são::    

- <strong>URL/endpoints</strong>: é o endereço do servidor e o caminho para o recurso que o cliente deseja acessar. Ou seja, é a identificação de recursos.

- <strong>Query Params</strong>: são parâmetros que são enviados na URL após o símbolo de interrogação (?). Eles são utilizados para filtrar, ordenar e paginar os dados. 
    
        Exemplo: http://localhost:3333/users?name=Gabriel&idade=20

- <strong>Método</strong>: Identifica o tipo de requisição que está sendo feita. Os principais métodos são: GET, POST, PUT, DELETE.

- <strong>Headers</strong>: São informações adicionais que podem ser enviadas na requisição. Exemplo: Content-Type, Authorization, Accept, etc.

- <strong>Body</strong>: É o corpo da requisição. É utilizado para enviar dados para serem criados ou atualizados. O body é utilizado apenas nos métodos POST e PUT, geralmente, em formato JSON.

# Métodos HTTP

Os métodos HTTP são utilizados para indicar a ação que está sendo realizada no recurso. Os principais métodos são:

- <strong>GET</strong>: Utilizado para consulta de informações do servidor. 

        Exemplo: GET /users 
        Exemplo: GET /users/1

- <strong>POST</strong>: Utilizado para criar novas registros no servidor.
        
        Exemplo: POST /users/1

- <strong>PUT</strong>: Utilizado para alteração de registros no servidor.

        Exemplo: PUT /users/1

- <strong>DELETE</strong>: Utilizado para deletar registros no servidor.
     
        Exemplo: DELETE /users/1

# Response

O Response é a resposta do servidor ao cliente. Ela é formada por blocos de informação que são enviados pelo servidor ao cliente. Esses blocos são:

- <strong>Headers</strong>: São informações adicionais que podem ser enviadas na resposta. Exemplo: Content-Type, Authorization, Accept, etc.

- <strong>Content-Type</strong>: É o tipo de conteúdo que está sendo retornado na resposta. Exemplo: text/plain, application/json, text/html, etc.

- <strong>Status Code</strong>: É o código de status da resposta. Ele indica o que aconteceu com a requisição. Exemplo: 200, 201, 400, 404, 500, etc.

- <strong>Body</strong>: É o corpo da mensagem e contém os dados que foram solicitados pelo cliente. O body é utilizado apenas nos métodos POST e PUT, geralmente, em formato JSON.

# Código de status

Os códigos de status são utilizados para indicar o que aconteceu com a requisição. Os códigos de status são divididos em categoria, sendo esta indicada pelo primeiro dígito do código. As principais categorias são:

- <strong>1xx (de 100 a 199)</strong>: Indica que a requisição foi recebida e o processo continua em andamento.

- <strong>2xx (de 200 a 299)</strong>: Indica que a requisição foi recebida, compreendida e aceita.

- <strong>3xx (de 300 a 399)</strong>: Indica que a requisição foi recebida, compreendida e que o cliente precisa realizar uma ação para completar a requisição. Ou seja, o cliente precisa realizar um redirecionamento.

- <strong>4xx (de 400 a 499)</strong>: Indica que houve um erro na requisição. Ou seja, o cliente realizou uma requisição inválida.

- <strong>5xx (de 500 a 599)</strong>: Indica que houve um erro no servidor. Ou seja, o servidor não conseguiu processar a requisição.

Os principais códigos de status são:

- <strong>200</strong>: Indica que a requisição foi bem sucedida "OK".

- <strong>201</strong>: Indica que a requisição foi bem sucedida e um novo recurso foi criado "Created".

- <strong>204</strong>: Indica que a requisição foi bem sucedida, mas não há conteúdo para retornar "No Content".

- <strong>400</strong>: Indica que a requisição foi mal sucedida devido a um erro do cliente "Bad Request".

- <strong>401</strong>: Indica que a requisição foi mal sucedida devido a falta de autenticação do cliente "Unauthorized".

- <strong>403</strong>: Indica que a requisição foi mal sucedida devido a falta de permissão do cliente "Forbidden".

- <strong>404</strong>: Indica que a requisição foi mal sucedida devido a um erro do cliente "Not Found".

- <strong>500</strong>: Indica que a requisição foi mal sucedida devido a um erro do servidor "Internal Server Error".

# Padrão REST

REST é a sigla para <strong>Representational State Transfer</strong>, ou seja, Transferência de Estado Representacional. Ele é um conjunto de princípios que definem como deve ser a arquitetura de um sistema. Sendo assim, é um padrão para construção de API que utiliza o protocolo HTTP e retorna uma representação do estado.

## Representação do estado

A representação do estado é a forma como os dados são retornados para o cliente. Os formatos mais comuns são: JSON, XML, HTML, etc.

O React Native não lê HTML, por isso, faz-se o retorno da representação dos dados dentro de um JSON.

# Módulos

São funções que são incluídas na aplicação e que podem ser reutilizadas em qualquer lugar. Eles são utilizados para organizar o código e evitar a repetição de código.

## incluir módulo

Para incluir um módulo, utiliza-se a palavra reservada <strong>require</strong> e passa-se o nome do módulo como parâmetro. Exemplo:

```javascript
const http = require('http');
```

## exportar módulo

Para exportar um módulo, utiliza-se a palavra reservada <strong>module.exports</strong> e passa-se o nome do módulo como parâmetro. Exemplo:

```javascript
module.exports = http;
```

# NodeJS como servidor

O NodeJS pode ser utilizado como servidor. Para isso, utiliza-se o módulo <strong>http</strong> e a função <span style=color:#ff0a54;}><strong>createServer</strong></span>.

A função createServer tem como parâmetro uma função que recebe dois parâmetros: <strong>req</strong> e <strong>res</strong>. O <strong>req</strong> é a requisição do cliente e o <strong>res</strong> é a resposta do servidor.

Se a resposta de um HTTP deve ser mostrado como HTML, deve-se incluir o header <strong>Content-Type</strong> com o valor <strong>text/html</strong> para que o navegador entenda que o conteúdo é HTML e renderize o conteúdo através do método <span style=color:#ff0a54;}><strong>writeHead</strong></span>. Nesse método, é recebido dois parâmetros: o primeiro é o código de status e o segundo é o header.

Depois, para finalizar a resposta, utiliza-se o método <span style=color:#ff0a54;}><strong>end</strong></span> e passa-se o conteúdo que deve ser retornado.

No entanto, o servidor não está rodando. Para isso, utiliza-se o método <span style=color:#ff0a54;}><strong>listen</strong></span> e passa-se a porta que o servidor deve rodar.

Exemplo:

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');
});

server.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
``` 


