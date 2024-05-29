const express = require('express')
const router = express.Router()
const app = express()
const cors = require('cors')
const cookieParser = require('cookie-parser')

app.use(cors())
app.use(cookieParser())

const checkTokenMiddleware = require('../middlewares/checkTokenMiddleware')

const UserController = require('../controllers/UserController')

router.post('/auth/register', UserController.createUser)

router.post('/auth/login', UserController.loginUser)

router.get('/users/listUsers', checkTokenMiddleware.checkToken ,UserController.listUsers)

module.exports = router