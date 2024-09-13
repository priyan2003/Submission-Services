const fastify = require('fastify')({logger: true});
const app = require('./app');
const serverConfig = require('./config/server.config');

const PORT = serverConfig.PORT;
fastify.register(app);

fastify.listen({port:PORT}, (err) =>{
    if(err){
        fastify.log.error(err);
        process.exit(1);
    }
    console.log(`Server up at port ${PORT}`);
})