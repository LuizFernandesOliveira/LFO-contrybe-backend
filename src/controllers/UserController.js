//importando a conecção com o banco
const connection = require('../database/connection');

module.exports = {
    async index(req, res) {
        const users = await connection('users').select('*');
    
        return res.json(users);
    },

    async create(req, res){
        const {name, email, password, classe} = req.body;

        await connection('users').insert({
            name,
            email,
            password,
            classe,
        }) 
        return res.json({ email });
    }
};