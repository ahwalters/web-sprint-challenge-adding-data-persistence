const express = require('express')
const Resource = require('./model')

const router = express.Router()

router.get('/', (req, res) => {
    Resource.get()
    .then((resource) => {
        res.status(200).json(resource)
    })
    .catch((err) => {
        console.log(err)
        res.status(500).json([])
    })
})

router.post('/', (req, res) => {
    const resource = req.body
    Resource.create(resource)
        .then(resource => {
            res.status(201).json(resource);
        })
        .catch(error => {
            console.log(error);
            res.sendStatus(500);
        })
})



module.exports=router;