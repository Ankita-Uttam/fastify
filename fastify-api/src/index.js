// Require the framework and instantiate it
const fastify = require('fastify')({
    logger : true //logger is disabled by default so we are initialising it as true initially
});
const SQL = require('@nearform/sql');

// register : core module of fastify, used to register routes, plugins etc
fastify.register(require('./routes'));

// register postgres plugin for fastify
fastify.register(require('fastify-postgres'), {
    connectionString: 'postgres://ankita.uttam@localhost/sample_user'
});

fastify.register(require('./api/userRegistration'));

// declare a route
fastify.get('/',async (request, reply) => {
    await reply.send({hello: 'world'});
    // return { hello: 'world' } // this is equivalent of the await call thence async is required
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