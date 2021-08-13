const express = require('express')
const app = express()
const port = 3000
var fs = require('fs')
http = require('http')
var path = require('path')
const { nextTick } = require('process')

app.get('/', (req, res) => {
    res.send('GET request')
})

app.listen(port, () => {
    console.log(`listening on at http://localhost:${port}`)
})

app.post('/', callpyconverter);

function callpyconverter( req, res ) {
    var spawn = require("child_process").spawn;
    var process = spawn('python', ["./converter.py", req.body]);

    var options = {root: path.join(__dirname)}
    var fileName = './output.tsv'
  
    setTimeout(function(){
        res.sendFile(fileName, options, function(err){
            if (err){
                console.log('error:', err)
            } else {
                console.log('Sent:', fileName)
            }
        })
    },3000)
}