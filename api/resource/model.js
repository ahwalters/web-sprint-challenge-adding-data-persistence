const db = require('../../data/dbConfig')

module.exports = {
    get,
    create
}

async function get() {
    const result = await db('resources')
    return result;
}

async function create(resource) {
    const [resource_id] = await db('resources').insert(resource)
    const resResource = await db('resources').where('resource_id', resource_id).first()
    return resResource;
  }