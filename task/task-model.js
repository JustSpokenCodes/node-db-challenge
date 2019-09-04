const db = require('../data/db-config.js');

const knex = require('knex');

const config = require('../knexfile.js');

module.exports = {
    find,
    findById,
    add
}

function find() {
    return db('task');
}

function findById(id) {
    return db('task').where({id}).first();
}

async function add(task) {
    const [id] = await db('task').insert(task);
    return findById(id);
}