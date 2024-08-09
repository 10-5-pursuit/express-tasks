const express = require('express')
const app = express()
const cors = require('cors')
const usersController = require('./controllers/usersController')


// Middleware
app.use(cors())
app.use(express.json())
// localhost:4001/users
app.use('/users', usersController)



// localhost:4001/
app.get('/', (req, res) => {
    res.json({ index: "This is the index page" })
})

app.get('*', (req, res) => {
    res.status(404).json({ error: "Page Not Found." })
})

module.exports = app
