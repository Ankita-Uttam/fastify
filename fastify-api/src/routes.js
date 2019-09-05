// TODO: to explore how to handle without async
const routes = async (fastify, options) => {
    fastify.get("/firstPlugin", (req, res) => {
        res.send({plugin: 'First Plugin'})
    })
};

module.exports = routes;