// Importação do arquivo "connection" para interagir com o banco de dados (SQLite3)
const connection = require('../database/connection');

// Crypto para criação de ID aleatório
const crypto = require('crypto');

module.exports = {

    // Função que lista as "ongs" da tabela 'ongs'
    async index(request, response) {
        const ongs = await connection('ongs').select('*');
        return response.json(ongs);
    },

    // Função que cria uma "ong" na tabela 'ongs'
    async create(request, response) {
        const {name, email, whatsapp, city, uf} = request.body;

        const id = crypto.randomBytes(4).toString('HEX');

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
    })
    return response.json({ id });
    },

    async delete(request, response) {
        const ongDeleteId = request.headers.authorization
        await connection('ongs')
        .where('id', ongDeleteId)
        .delete('id')

        return response.json({ text: `A ong com ID  ${ongDeleteId} foi deletada.` })
    }
};