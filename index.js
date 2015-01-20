var Hapi = require('hapi');
var Routes = require('./lib/routes');
var server = new Hapi.Server();
server.connection({port: 8080 });

server.route(Routes);
server.start( function () {
  console.log('Server running at:', server.info.uri);
});
