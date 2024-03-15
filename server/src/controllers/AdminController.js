const connection = require('../database/connection');

module.exports = {
    async deleteAllIncidents(request, response) {
        const incidents = await connection('incidents')
        const incidentCount = await connection('incidents')
        .select('*')
        .delete('*')

        return response.json({
            text: `Foram apagados ${incidentCount} incidentes`,
            incidents: incidents,
        });
    },

    async listAllIncidents(request, response) {
        const incidents = await connection('incidents')
        .select('*')
        response.header('X-Total-Count', count['count(*)']);

        return response.json({incidents})
    },

    async deleteAllOngs(request, response) {
        const ongs = await connection('ongs')
        .select('*')
        .delete('*')

    return response.json(ongs)
    }
}