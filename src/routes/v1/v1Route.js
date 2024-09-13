async function v1Router(fastify,options){
    fastify.register(require('./testRoute/test'),{prefix: '/test'});
}
module.exports = v1Router;