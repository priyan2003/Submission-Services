const testController = require('../../../controller/testController');
async function testRouter(fastify,options){
    fastify.get('/ping', testController.pingrequest);
}
module.exports = testRouter;