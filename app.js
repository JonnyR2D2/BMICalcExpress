const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
})


app.post('/', function(req,res){
    let weight = parseFloat(req.body.weight);
    let height = parseFloat(req.body.height);
    let result = Math.floor(weight/(height * height));

    res.send('Your BMI is ' + result + BMIIMAGE);
})

app.listen(3000);