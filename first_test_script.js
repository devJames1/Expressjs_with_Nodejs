// Simple ExpressJS App
// const express = require('express')
// const app = express()

// app.get('/', (req, res) => {
//     res.end('Hello, World!')
// })

// // app.get('/h', (req, res) => {
// //     res.end('Hello, World H!')
// // }) 

// app.listen(8000, () => console.log('Listening on port 8000'))


//ExpressJS Routing
// const express = require('express')
// const app = express()

// app.get('/', (req, res) => res.end('Hompage'))
// app.get('/about', (req, res) => res.end('About Us'))
// app.get('/services', (req, res) => res.end('Services'))
// app.get('/help', (req, res) => res.end('Help'))



// app.listen(8000, () => console.log('Listening on port 8000'))



// TEMPLATING IN EXPRESSJS

//using EJS

const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index.ejs', {'name': 'John Doe'})
})

app.listen(8000, () => console.log('Listenng on port 8000'))