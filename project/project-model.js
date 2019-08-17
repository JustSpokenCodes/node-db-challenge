const db = require('../data/db-config.js');

module.exports = {
    find,
    add
}

function find() {
    return db('projects');
}

async function add(projects) {
    const [id] = await db('projects').insert(projects);
}