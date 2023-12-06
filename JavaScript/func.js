// <--------------- SUM FROM 1 TO N USING FUNTION --------------->
function sum1ToN (n){
    var a = 0;
    for(let i = 0; i <= n; i++){
        a += i;
    }
    return a;
}
const ans = sum1ToN(10);
console.log(ans);

// <--------------- ARITHEMATIC OPERATIONS --------------->
function sum (num1, num2){
    return num1 + num2;
}
function diff (num1, num2){
    return num1 - num2;
}
function product (num1, num2){
    return num1 * num2;
}
function div (num1, num2){
    return num1 / num2;
}
function mod (num1, num2){
    return num1 % num2;
}

function arithematicOperation (num1, num2, operation){
    return operation(num1,num2);
}

let num1 = 5;
let num2 = 2;
console.log(num1)

var ans1 = arithematicOperation(num1, num2, sum);
console.log("Sum : " + ans1); 

var ans2 = arithematicOperation(num1, num2, diff);
console.log("Difference : " + ans2); 

var ans3 = arithematicOperation(num1, num2, product);
console.log("Product : " + ans3); 

var ans4 = arithematicOperation(num1, num2, div);
console.log("Division : " + ans4); 

var ans5 = arithematicOperation(num1, num2, mod);
console.log("Modulo : " + ans5); 
