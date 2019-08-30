// Require the framework and instantiate it
const fastify = require('fastify')({
    logger : true //logger is disabled by default so we are initialising it as true initially
});

// declare a route
// async is necessary here otherwise the page just keeps on loading - why??
fastify.get('/',async (request, reply) => {
    return { hello: 'world' }
});

// can send plain string as well in response
fastify.get('/message', async (req, res) => {
    return "This is a string message not message object";
});

// start the server
const start = async () => {
    try {
        await fastify.listen(3500);
        fastify.log.info(`server listening on ${fastify.server.address().port}`)
    } catch (error) {
        fastify.log.error(error);
        process.exit(1);
    }
};

start();