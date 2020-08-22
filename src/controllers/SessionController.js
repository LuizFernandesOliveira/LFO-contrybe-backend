const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const { email, password } = request.body;

        const user = await connection('users')
            .where('email', email)
            .where('password', password)
            .select('name', 'classe')
            .first();

        if(!user){
            return response.status(400).json({ error: "Não foi encontrado nenhum usuario com o email" });
        }

        return response.json(user);
    }
};