const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    console.log('root route')
    res.render('index2.ejs', {text22: 'World'})
})

//import the users file and use
const userRouter = require('./routes/users')

// make /users the base route for all user related request.
app.use('/users', userRouter)

app.listen(8000, () => console.log('Listening on port 8000'))