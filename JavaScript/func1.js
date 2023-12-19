const fs = require('fs');

function callback(err, data){
    console.log(data);
}

// first way to function call
fs.readFile('hello.txt', 'utf-8', callback);

// second way to function call
fs.readFile('hello.txt', 'utf-8', function(err, data){
    console.log(data);
});

// third way to function call
fs.readFile('hello.txt', 'utf-8', (err, data) => {
    console.log(data);
});
