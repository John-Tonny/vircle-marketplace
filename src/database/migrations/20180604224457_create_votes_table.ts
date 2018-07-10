import * as Knex from 'knex';


exports.up = (db: Knex): Promise<any> => {
    return Promise.all([
        db.schema.createTable('votes', (table: Knex.CreateTableBuilder) => {
            table.increments('id').primary();

            table.integer('proposalOptionId').notNullable();
            table.string('voter').notNullable();
            table.integer('block').notNullable();
            table.integer('weight').notNullable();

            table.timestamp('updated_at').defaultTo(db.fn.now());
            table.timestamp('created_at').defaultTo(db.fn.now());
        })
    ]);
};

exports.down = (db: Knex): Promise<any> => {
    return Promise.all([
        db.schema.dropTable('votes')
    ]);
};
