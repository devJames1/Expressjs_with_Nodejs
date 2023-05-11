const express = require('express')

// create a mini app pecuiler to this file.
const router = express.Router()


router.get('/', (req, res) => {
    res.send('User List')
}) 

router.get('/new', (req, res) => {
    res.send('User New Form')
}) 

router.post('/', (req, res) => {
    res.send('Create User')
})

router.get('/new', (req, res) => {
    res.send('User New Form')
}) 


module.exports = router

