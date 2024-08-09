const express = require('express')
const users = express.Router()
const jwt = require('jsonwebtoken')
const { authenticateToken } = require('../auth/auth')
const { getUsers, createUser, logInUser } = require('../queries/users')
require('dotenv').config()
const secret = process.env.SECRET
const tasksController = require('./tasksController')

// localhost:4001/users/5/tasks
users.use('/:user_id/tasks', authenticateToken,tasksController)


// localhost:4001/users/
users.get('/', async (req, res) => {
    try {
        const users = await getUsers()
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" })
    }
})

// localhost:4001/users/
users.post('/', async (req, res) => {
    try {
        const newUser = await createUser(req.body)
        const token = jwt.sign({ userId: newUser.user_id, username: newUser.username }, secret)
        
        const user = { 
            user_id: newUser.user_id,
            username: newUser.username, 
            email: newUser.email,  
        }
        res.status(201).json({ user, token })
    } catch (error) {
        res.status(500).json({ error: "Invalid information", info: error })
    }
})


// localhost:4001/users/login
users.post('/login', async (req, res) => {
    try {
        const user = await logInUser(req.body)
        if(!user){
            res.status(401).json({ error: "Invalid username or password" })
            return // Exit the function
        }

        const token = jwt.sign({ userId: user.user_id, username: user.username }, secret)

        const loggedInUser = {
            user_id: user.user_id,
            username: user.username,
            email: user.email
        }

        res.status(200).json({ user: loggedInUser, token })

    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" })
    }
})



module.exports = users