const express = require('express')
const router = express.Router()
const app = express()
const cors = require('cors')


app.use(cors())



const ProfissionalController = require('../controllers/ProfissionalController')

router.post('/auth/register', ProfissionalController.createUser)

router.post('/auth/login', ProfissionalController.loginUser)

router.get('/users', ProfissionalController.getAllUsers)


module.exports = router