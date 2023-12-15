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

function calculateMul (n){
    var mul = 1;
    for(let i = 1; i <= n; i++){
        mul *= i;
    }
    return mul;
}

function handleFirstRequest(req, res){
    // console.log(req.body);
    var counter = req.body.counter;   // for body params
    // var counter = req.headers.counter;   // for header params
    // var counter = req.query.counter;   // for query   params
    var sumAns = calculateSum(counter);
    var mulAns = calculateMul(counter);
    console.log(sumAns);
    console.log(mulAns);
    var objAns = {
        sum:sumAns,
        mul:mulAns,
    };
    // var ans = "The sum is " + sum;
    res.send(objAns);
}
function welcome (name, age){
    return `Hello ${name} your age is ${age}`;
}

function handleSecondRequest(req, res){
    var name = req.body.name;   // for body params
    var age = req.body.age;   // for body params
    var ans = welcome(name, age);
    console.log(name, age);
    res.send(ans);
}

app.post('/sum', handleFirstRequest);
app.post('/welcome', handleSecondRequest);

function started() {
    console.log(`Example app listening on port ${port}`);
}

app.listen(port, started);