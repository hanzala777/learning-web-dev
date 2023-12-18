function higherOrderAsync(callback){
    setTimeout(callback, getDayByOfMonth() * 1000);
}
function getDayByOfMonth(){
    const date = new Date;
    return date.getUTCDate();
}
function print(){
    console.log(`this is printed after ${getDayByOfMonth()} seconds`);
}
higherOrderAsync(print);
