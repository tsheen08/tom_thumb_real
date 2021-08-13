var express = require('express');
const { symlinkSync } = require('fs');
var http = require('http');
var app = express();
var fs = require('fs')

app.use(express.urlencoded({extended:false}))
app.use(express.json())


app.listen(3000, function( ){
    console.log('server running on port 3000. Ctrl-C to exit');
})



app.post('/', callpyconverter);

function callpyconverter( req, res ) {
    var spawn = require("child_process").spawn;
    var process = spawn('python', ["./converter.py", req.body.fileName]);
}

// process.stdout.on('data', function (data) {
//     res.download('./outpust.tsv', 'output.tsv')
// })

