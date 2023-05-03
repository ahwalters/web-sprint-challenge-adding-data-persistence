const express = require('express')
const Project = require('./model')

const router = express.Router()

router.get('/', (req, res) => {
    Project.get()
    .then((projects) => {
        res.status(200).json(projects)
    })
    .catch((err) => {
        console.log(err)
        res.status(500).json([])
    })
})

router.post('/', (req, res) => {
    const project = req.body
    Project.create(project)
        .then(project => {
            res.status(201).json(project);
        })
        .catch(error => {
            console.log(error);
            res.sendStatus(500);
        })
})



module.exports=router;