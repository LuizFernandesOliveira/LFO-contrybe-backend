
exports.up = function(knex) {
    return knex.schema.createTable('posts', function(table){
        table.increments('id')
        table.integer('block').notNullable()
        table.integer('day').notNullable()
        table.integer('part_number').notNullable()
        table.integer('exercise_number').notNullable()
        table.string('link').notNullable()

        table.string('user_email')
            .notNullable()
            .references('email')
            .inTable('users');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('posts');
};
