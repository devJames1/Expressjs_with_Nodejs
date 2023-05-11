const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(logger)

//MIDDLEWARE TO ALLOW US ACCESS BODY OF REQUEST IN EXPRESS BY DEFAULT EXPRESS DON"T ALLOW ACCESS TO BODY, SO USE MIDDLEWARE
app.use(express.urlencoded({ extended: true }))

//FOR JSON REQUEST ALWAYS ADD THIS LINE this allows you to parse json information from the body of requestt/response 
app.use(express.json()) 

//USING A MIDDLEWARE STATIC HTML THAT NEVER CHANGES
app.use(express.static('public'))

// app.get('/', (req, res) => {
//     // console.log('root route')
//     res.render('index2.ejs', {text22: 'World'})
// })

//import the users file and use
const userRouter = require('./routes/users')

// make /users the base route for all user related request..
app.use('/users', userRouter)

// MIDLLEWARE BASICS:

//To use only in a particular route define inside the route like so: app.get('/', logger (req, res) => {}).
//calling a middle ware functions multiple times will run it multiple times, it is usefull when yyou want multiple functionsto run before returning output to user. e.g app.get('/', logger, logger, logger (req, res) => {})
// as long as you call next it will run the next code and only on that route

// you can also define middlewares functions in the seperate route files to only run them on that route
function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}

app.listen(8000, () => console.log('Listening on port 8000'))