const express = require('express')
const port = process.env.port || 3000
const app = express()

app.get('/', (req,res) => {
    return res.send('Hello, world!')
})

app.listen(port, () => {
    console.log('The server is open and running on port ' + port)
})