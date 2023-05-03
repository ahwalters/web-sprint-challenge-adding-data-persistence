const db = require('../../data/dbConfig')

module.exports = {
    get,
    create
}

async function get() {
    const result = await db('tasks as t')
    .join('projects as p', 'p.project_id', 't.project_id')
    result.map((task) => {
        task.task_completed = Boolean(task.task_completed)
    })
    return result;
}

async function create(task) {
    const [task_id] = await db('tasks').insert(task)
    const resTask = await db('tasks').where('task_id', task_id).first()
    resTask.task_completed = Boolean(task.task_completed)
    return resTask;
  }