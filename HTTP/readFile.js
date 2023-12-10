const fs = require('fs');

function fileRead(err, data){
    console.log(data);
}

fs.readFile('file.txt', 'utf-8', fileRead);