const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

//init server with express
const app = express()

//logger
app.use(morgan('combined'))
//to manage json data and request
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send({
        message: 'Hi buddy, you\'re on express server',
    })
})


app.post('/register', (req,res) => {
    res.send({
        message: 'User registered: ' + req.body.email,
    })
})

//server listen on the env port or if is blocked on 8081
app.listen(8081);