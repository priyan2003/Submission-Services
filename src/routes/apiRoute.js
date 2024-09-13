async function apiRouter(fastify,options){
    fastify.register(require('./v1/v1Route'), {prefix: '/v1'});
}
module.exports = apiRouter;