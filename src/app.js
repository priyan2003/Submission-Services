const fastifyPlugin = require('fastify-plugin');
// const test = require('../src/controller');
// const testRouter = require('./routes/testRouters')
/**
 * 
 * @param {Fastify object} fastify 
 * @param {*} options 
 */
async function app(fastify,options){
    fastify.register(require('@fastify/cors'));
    fastify.register(require('./routes/apiRoute'),{prefix: '/api'});
    //fastify.register(require(test),{prefix: '/test'});
}

module.exports = fastifyPlugin(app);