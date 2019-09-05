// TODO: to explore how to handle without async
const routes = async (fastify, options) => {
    fastify.get("/firstPlugin", (req, res) => {
        res.send({plugin: 'First Plugin'})
    });

    fastify.get("/secondRoute", (req,res) => {
        res.send("This is my second route with string response")
    })
};

module.exports = routes;