const express = require('express')

// create a mini app pecuiler to this file.
const router = express.Router()


router.get('/', (req, res) => {
    //geting parameters passed directly into the query url e.g http://localhost:8000/users?name=Jose
    console.log(req.query.name)

    res.send('User List')
}) 

router.get('/new', (req, res) => {
    // res.send('User New Form')
    res.render('users/new')
})  

router.post('/', (req, res) => {
    // res.send('Create User')
    //code to emulate real world scenerio
    const isValid = false
    if (isValid) {
        users.push({ firstName: req.body.firstName })
        res.redirect(`/users/${users.length - 1}`)
    }else{
        console.log('Error')
        res.render('users/new', {firstName: req.body.firstName })
    }
    // console.log(req.body.firstName)
    // res.send('Hi')
})

// creating a dynamic url route that routes to anything of the same string structure e.g users/1, users/2 ...users/:'anthing',  
//router.route helps us link similar request like get,put,delete
router.route('/:id').get( (req, res) => {
    // this gets the id dynamically
    // console.log(req.user)
    console.log(req.user)
    res.send(`Get User with ID ${req.params.id}`)
}).put((req, res) => {
    // this gets the id dynamically
    req.params.id
    res.send(`Update User with ID ${req.params.id}`)
}).delete((req, res) => {
    // this gets the id dynamically
    req.params.id
    res.send(`Delete User with ID ${req.params.id}`)
})

//param in express it runs anytime it finds a param that matches a stringe.g id, next should be defind else it's stuck infinately. Param is likea middleware
// saves us from writing ton of code inside the different request above to get the user, it allows us do it in one place.  
const users = [{name: 'Kyle'}, {name: 'Sally'}]
router.param('id', (req, res, next, id) => {
    req.user = users[id]
    next()
})

module.exports = router