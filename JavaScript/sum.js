// <--------------- SUM FROM 1 TO 100 --------------->
let sum = 0;
for(let i = 1; i <= 100; i++){
    sum += i;
}
console.log(sum);

// <--------------- FIBONACCI SERIES --------------->
const number = parseInt(prompt('Enter the number of terms: '));
let n1 = 0, n2 = 1, nextTerm;


for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}

// <--------------- PATTERN --------------->
console.log('Pattern:');
let a = '';
for(let i = 0; i <= 4; i++){
    for(let j = 0; j < i; j++){
        a += '*'; 
    }
    a += '\n';
}
console.log(a);