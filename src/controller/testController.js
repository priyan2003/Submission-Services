const  testService  = require("../services/testServices");

// const testRouter = require("../routes/testRouters");

async function pingrequest(req ,res){
    const result = await testService.pingcheck();
    res.send({data: result});
}
function starrequest(req ,res){
    res.send('star is up');
}
module.exports = {
    pingrequest,
    starrequest
}