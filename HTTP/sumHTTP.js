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

function handleFirstRequest(req, res){
    var counter = req.query.counter;
    var sum = calculateSum(counter);
    console.log(sum);
    var ans = "The sum is " + sum;
    res.send(ans);
}

app.get('', handleFirstRequest);

function started() {
    console.log(`Example app listening on port ${port}`);
}

app.listen(port, started);