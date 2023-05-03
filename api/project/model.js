const db = require('../../data/dbConfig')

module.exports = {
    get,
    create
}

async function get() {
    const result = await db('projects')
    result.map((project) => {
        project.project_completed = Boolean(project.project_completed)
    })
    return result;
}

async function create(project) {
    const [project_id] = await db('projects').insert(project)
    const resProject = await db('projects').where('project_id', project_id).first()
    resProject.project_completed = Boolean(resProject.project_completed)
    return resProject;
  }