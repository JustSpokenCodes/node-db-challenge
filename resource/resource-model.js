const db = require('../data/db-config.js');

const knex = require('knex');

const config = require('../knexfile.js');

module.exports = {
    find,
    findById,
    add
}

function find() {
    return db('resource');
}

function findById(id) {
    return db('resource').where({id}).first();
}

async function add(resource) {
    const [id] = await db('resource').insert(resource);
    return findById(id);
}