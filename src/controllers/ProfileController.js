const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const user_email = request.headers.authorization;

        const posts = await connection('posts')
            .where('user_email', user_email)
            .select('*')
            .orderBy('block', 'asc')
            .orderBy('day', 'asc')
        
            return response.json(posts);
    }
};