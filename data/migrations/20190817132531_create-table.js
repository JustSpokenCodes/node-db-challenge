
exports.up = function(knex) {
    return knex.schema 
        .createTable('project', tbl => {
            tbl.increments();
            tbl.text('name', 199)
                .notNullable();
            tbl.string('description');
            tbl.boolean('completed')
                .defaultTo(false);
        })
        .createTable('resource', tbl => {
            tbl.increments();
            tbl.string('resource_name', 199)
                .notNullable();
            tbl.string('description');
            tbl.integer('project_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('project');
        })
        .createTable('task', tbl => {
            tbl.increments();
            tbl.string('description')
                .notNullable();
            tbl.text('notes');
            tbl.boolean('completed')
                .defaultTo(false);
            tbl.integer('project_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('project');
        })
        .createTable('project_resource', tbl => {
            tbl.integer('project_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('project')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            tbl.integer('resource_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('resource')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            tbl.primary(['project_id', 'resource_id']);
        })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('project_resource')
    .dropTableIfExists('task')
    .dropTableIfExists('resource')
    .dropTableIfExists('project');
};


// i need to have the join table last so that why when we delete it, those will be the first things to be deleted