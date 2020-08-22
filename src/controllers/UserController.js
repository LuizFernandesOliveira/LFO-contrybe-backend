//importando a conecção com o banco
const connection = require('../database/connection');

module.exports = {
    async index(req, res) {
        const users = await connection('users').select('*');
    
        return res.status(200).json(users);
    },

    async create(req, res){
        const {name, email, password, classe} = req.body;

        const newUser = await connection('users').insert({
            name,
            email,
            password,
            classe,
        }) 
        if(!newUser){
            return response.status(400).json({ error: "Não foi possível cadastrar" });
        }
        return res.status(200).json({ email });
    }
};