function filterArray(arr, callback){
    function xyz(element, index, array){
        if(callback(element) === true){
            return true;
        }
        else{
            return false;
        }
    }
    return arr.filter(xyz);
}

testArr = [1, 2, 3, 4, 5];
function isEven(element){
    if(element % 2 === 0){
        return true;
    } else {
        return false;
    }
}
newArr = filterArray(testArr, isEven);
console.log(newArr);