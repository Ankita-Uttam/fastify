const registrationApi = async (fastify, options) => {
    fastify.get('/users', (req, reply) => {
        fastify.pg.connect(onConnect);

        function onConnect (err, client, release) {
            if (err) return reply.send(err);

            fastify.pg.query(
                'SELECT * from register_details',
                function onResult (err, result) {
                    release();
                    const {rows} = result;
                    reply.send(err || rows)
                }
            )
        }
    });
};

module.exports = registrationApi;