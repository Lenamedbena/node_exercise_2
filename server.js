const express = require('express')
const app = express()

app.use(express.static('public'))
app.set('port', (process.env.PORT || 8080));

function greet (){
    var greetings = ["Hei", "Hello", "Hola", "Hey"];
    var rgreet = greetings[Math.floor(Math.random()*greetings.length)];
    return rgreet;
}

app.get ('/greet/:navn', function(req, res){
    res.send(greet() + " " + req.params.navn);
})

app.listen(app.get('port'), function () {
  console.log('Example app listening on port 8080!')
})