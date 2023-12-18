function mapArray(arr, callback){
    function xyz(element, index, array){
        // newArr[index] = callback(arr[index]);
        return callback(arr[index]);
    }
    // newArr = [];
    // arr.forEach(xyz);
    // return newArr
    return arr.map(xyz);
}

testArr = [1, 2, 3, 4, 5];
function add1(element){
    return element + 1;
}
newArr = mapArray(testArr, add1);
console.log(newArr);