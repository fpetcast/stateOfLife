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

app.get('/status', (req, res) => {
    res.send({
        message: 'Hi buddy',
    })
})

//server listen on the env port or if is blocked on 8081
app.listen(8081);