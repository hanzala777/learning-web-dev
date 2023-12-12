const express = require('express');
const app = express();
const port = 3000;

function calculateSum (n){
    var sum = 0;
    for(let i = 0; i <= n; i++){
        sum += i;
    }
    return sum;
}

function welcome (name){
    return `Welcome ${name} to my page`; 
}

function handleFirstRequest(req, res){
    var counter = req.query.counter;
    var sum = calculateSum(counter);
    console.log(sum);
    var ans = "The sum is " + sum;
    res.send(ans);
}

function handleSecondRequest(req, res){
    var name = req.query.name;
    var ans = welcome(name);
    console.log(ans);
    res.send(ans);
}

app.get('', handleFirstRequest);
app.get('/welcome', handleSecondRequest);

function started() {
    console.log(`Example app listening on port ${port}`);
}

app.listen(port, started);