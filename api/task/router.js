const express = require('express')
const Task = require('./model')

const router = express.Router()

router.get('/', (req, res) => {
    Task.get()
    .then((task) => {
        res.status(200).json(task)
    })
    .catch((err) => {
        console.log(err)
        res.status(500).json([])
    })
})

router.post('/', (req, res) => {
    const task = req.body
    Task.create(task)
        .then(task => {
            res.status(201).json(task);
        })
        .catch(error => {
            console.log(error);
            res.sendStatus(500);
        })
})



module.exports=router;