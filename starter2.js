// a simple example of routing

const express = require('express')
const app = express()

app.get('/', function(req, res) {
    res.send('Hello Class Members')
})

app.listen(3000)
