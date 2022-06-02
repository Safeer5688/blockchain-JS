var express = require('express')
var app = express()

app.get('/blockchain', function (req, res) {
    res.send("Hey dev")
})

app.listen(3000,function(){
    console.log("Server started")
})