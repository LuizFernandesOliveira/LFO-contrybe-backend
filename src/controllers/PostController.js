const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        
        const posts = await connection('posts')
            .join('users', 'users.email', '=', 'posts.user_email')
            .select([
                'posts.*',
                'users.name',
                'users.email',
                'users.classe'
            ]);

        return response.json(posts);
    },

    async create(request, response){
        const { 
            block,
            day, 
            part_number,
            exercise_number,
            link,
        } = request.body;

        const user_email = request.headers.authorization;

        const [id] = await connection('posts').insert({
            block,
            day,
            part_number,
            exercise_number,
            link,
            user_email,
        });

        return response.json({ id });
    },

    async delete(request, response){
        const { id } = request.params;
        const user_email = request.headers.authorization;

        const post = await connection('posts')
            .where('id', id)
            .select('user_email')
            .first();
        
        if(post.user_email != user_email){
            return response.status(401).json({error:"Você não tem tem permissão para excluir essa postagem"});
        }

        await connection('posts').where('id', id).delete();

        return response.status(204).send();
    }
};