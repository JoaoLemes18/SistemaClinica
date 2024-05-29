const express = require('express')
const router = express.Router()
const app = express()
const cors = require('cors')
const cookieParser = require('cookie-parser')

const Appointments = require('../controllers/AppointmentController')

app.use(cors())
app.use(cookieParser())

const checkTokenMiddleware = require('../middlewares/checkTokenMiddleware')

router.get('/appointments', checkTokenMiddleware.checkToken, Appointments.listAppointments)

router.post('/appointments/create', checkTokenMiddleware.checkToken, Appointments.createAppointment)

module.exports = router