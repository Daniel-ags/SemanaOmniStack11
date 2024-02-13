const connection = require('../database/connection');

module.exports = {
    async deleteAllIncidents(request, response) {
        const incidents = await connection('incidents')
        .select('*')
        .delete('*')

    return response.json(incidents)
    },

    async listAllIncidents(request, response) {
        const incidents = await connection('incidents')
        .select('*')

    return response.json(incidents)
    },

    async listAllOngs(request, response) {
    const ongs = await connection('ongs')
    .select('*')

    return response.json(ongs)
    },

    async deleteAllOngs(request, response) {
        const ongs = await connection('ongs')
        .select('*')
        .delete('*')

    return response.json(ongs)
    }
}