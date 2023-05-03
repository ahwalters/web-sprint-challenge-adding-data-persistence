/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('projects', tbl => {
        tbl.increments("project_id");
        tbl.text('project_name').notNullable();
        tbl.text('project_description');
        tbl.integer('project_completed').defaultTo(0);
    })
    .createTable('resources', tbl => {
        tbl.increments("resource_id");
        tbl.text('resource_name').unique().notNullable();
        tbl.text('resource_description');
    })
    .createTable('tasks', tbl => {
        tbl.increments("task_id");
        tbl.text('task_description').notNullable();
        tbl.text('task_notes');
        tbl.integer('task_completed').defaultTo(0);
        tbl.integer('project_id')
        // forces integer to be positive
        .unsigned()
        .notNullable()
        .references('project_id')
        .inTable('projects');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('tasks')
    .dropTableIfExists('projects')
    .dropTableIfExists('resources');
};
