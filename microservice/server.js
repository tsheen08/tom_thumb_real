const express = require('express')
const app = express()
const port = 3000
var cors = require('cors')
var fs = require('fs')
http = require('http')
var path = require('path')

app.use(express.urlencoded({extended: true}))
app.use(express.json()) 
app.use(cors())

app.get('/', (req, res) => {
    
    str = req.query.please
    in_str = str.replace(/,/g, '\t')
    in_str2 = in_str.replace(/\\n/g, '\n')
    console.log(in_str)
    res.send(in_str2)
})

app.listen(port, () => {
    console.log(`listening on at http://localhost:${port}`)
})