require('dotenv').config()
const express = require('express')
const passport = require('passport')
const cors = require('cors')
const router = require('./routes/index')
require('./config/database')
require('./config/passport')
const path = require('path')

const app = express()

app.use(cors())
app.use(express.json()) 
app.use(express.urlencoded({extended: true}))

app.use('/api', router)

<<<<<<< HEAD
if(proccess.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
    app.get("*", (req, res)=>{res.sendFile(path.join(__dirname+"/client/build/index.html"))})
}

const port = proccess.env.PORT
const host = process.env.HOST || '0.0.0.0'

app.listen(port, host, () => console.log('api rest corriendo en el puerto '+port+ "en "+host))
=======
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname+"/client/build/index.html"))
    })
}

const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT 

app.listen(port, host, () => console.log("App listening on port "+port+" on "+host))
>>>>>>> 773bc9e6ba33d47c57253b99797c76444d62d057
