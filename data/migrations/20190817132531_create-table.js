
exports.up = function(knex) {
    return knex.schema 
        .createTable('project', tbl => {
            tbl.increments();
            tbl.text('name', 199)
                .notNullable();
            tbl.string('description');
            tbl.boolean('completed')
                .notNullable()
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
                .references('project.id');
        })
        .createTable('task', tbl => {
            tbl.increments();
            tbl.string('description', 199)
                .notNullable();
            tbl.text('notes');
            tbl.boolean('compeleted')
                .notNullable()
                .defaultTo(false);
            tbl.integer('project_id')
                .unsigned()
                .notNullable()
                .references('project.id');
        })
        .createTable('project_resource', tbl => {
            tbl.integer('project_id')
                .unsigned()
                .notNullable()
                .references('project.id')
                .inTable('project')
                .onUpdate('CASCADE')
                .onDelete('CASCASE');
            tbl.integer('resource_id')
                .unsigned()
                .notNullable()
                .references('resource.id')
                .inTable('project')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            tbl.primary(['project_id', 'resource_id']);
        })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('task')
    .dropTableIfExists('resource')
    .dropTableIfExists('project');
};
