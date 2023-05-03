const express = require('express');
const server = express();


server.use(express.json())

const projectsRouter = require('./project/router')
server.use('/api/projects', projectsRouter)

const resourceRouter = require('./resource/router')
server.use('/api/resources', resourceRouter)

const taskRouter = require('./task/router')
server.use('/api/tasks', taskRouter)

module.exports = server;