const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.Server({
    port: 3000,
    host: 'localhost',
    routes: {
      cors:{
        origin: ['*']
      }
    }
  });

  server.route(routes);

  await server.start();
  console.log(`Server Running at ${server.info.uri}`);
};
init();