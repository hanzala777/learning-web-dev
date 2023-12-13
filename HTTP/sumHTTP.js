const express = require('express');
var bodyParser = require('body-parser');
const app = express();
const port = 3000;
/*
function middleware1(req, res, next){
    next();
}
app.use(middleware1);
*/    // for header params
app.use(bodyParser.json());     // for body params

function calculateSum (n){
    var sum = 0;
    for(let i = 0; i <= n; i++){
        sum += i;
    }
    return sum;
}

function handleFirstRequest(req, res){
    // console.log(req.body);
    var counter = req.body.counter;   // for body params
    // var counter = req.headers.counter;   // for header params
    // var counter = req.query.counter;   // for query   params
    var sum = calculateSum(counter);
    console.log(sum);
    var ans = "The sum is " + sum;
    res.send(ans);
}

app.post('', handleFirstRequest);

function started() {
    console.log(`Example app listening on port ${port}`);
}

app.listen(port, started);