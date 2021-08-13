const express = require('express')
const app = express()
const port = 3000
var fs = require('fs')
http = require('http')
var path = require('path')
//const { nextTick, allowedNodeEnvironmentFlags } = require('process')

app.use(express.urlencoded({extended: true}))
app.use(express.json()) 

app.get('/', (req, res) => {
    
    str = req.query.please
    in_str = str.replace(/,/g, " ")
    in_str2 = in_str.replace(/\\n/g, '\n')
    console.log(in_str)
    require('fs').writeFileSync('outfile.tsv', in_str2)

    var options = {root: path.join(__dirname)}
    var fileName = './outfile.tsv'

    res.sendFile(fileName, options, function(err){
        if (err){
            console.log('error:', err)
        } else {
            console.log('Sent:', fileName)
        }
    })
})

app.listen(port, () => {
    console.log(`listening on at http://localhost:${port}`)
})