function sort(string){
    return string.split('').sort().join('');
}
function isAnagram(str1, str2){
    var lowStr1 = str1.toLowerCase();
    var lowStr2 = str2.toLowerCase();
    return sort(lowStr1) == sort(lowStr2);
}
var str1 = 'Hanzala';
var str2 = 'Alaznah';
console.log(str1)
console.log(str2)
var ans = isAnagram(str1, str2);
console.log(ans);