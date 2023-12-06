start_time = new Date().getTime();
let sum = 0;
for(let i = 0; i < 1000000; i++){
    sum += i;
}
console.log("SUM : " + sum);
end_time = new Date().getTime();
var timeTaken = (end_time - start_time)/1000;
console.log("Time Taken : " + timeTaken)