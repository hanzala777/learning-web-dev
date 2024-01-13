let a = prompt("Enter number");
let b = prompt("Enter number");

if (isNaN(a) || isNaN(b)){
    throw SyntaxError("Sorry its not allowed");
}
let sum = parseInt(a) + parseInt(b);

try {
    console.log(sum + i);
} catch (error) {
    console.log("Error agaya re bhai");
} finally {
    console.log("files are being closed and db connection is being closed");
}