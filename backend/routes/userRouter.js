const express = require('express')
const router = express.Router()
const UserController = require('../controllers/UserController')

router.get('/users/getUsers', UserController.getAllUsers)

router.post('/auth/register', UserController.createUser)

router.post('/auth/login', UserController.loginUser)

module.exports = router