const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router('dbmahkito.json');
const middleWares = jsonServer.defaults();

const port = process.env.port || 8080;

server.use(middleWares);
server.use(router);
server.listen(port, () => {console.log(`JSON server is running in ${port}`);
 });