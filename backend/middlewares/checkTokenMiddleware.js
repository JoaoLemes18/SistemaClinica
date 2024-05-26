require('dotenv').config()
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const app = require('express')()

app.use(cookieParser())

exports.checkToken = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]


    if(!token) return res.status(401).json({  msg2: token})

    try {  
        const secret = process.env.SECRET
        jwt.verify(token, secret)
        next()
        //res.status(200).json({msg: 'Tudo certo', token})
        
    } catch(err) {
        res.status(400).json({ msg: 'Invalid Token' }, err)
    }
}