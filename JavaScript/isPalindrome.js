function transform(str){
    let answer = '';
    for(let i = 0; i < str.length; i++){
        if(str[i] === ' ' || str[i] === '.' || str[i] === ',' || str[i] === '?' || str[i] === '!'){

        } else{
            answer += str[i];
        }
    }
    return answer;
}
function rev(str){
    let ans = '';
    for(var i = str.length-1; i>=0; i--){
        ans += str[i];
    }
    return ans;
}
function palindrome(str){
    lowStr = str.toLowerCase();
    console.log(transform(lowStr));
    console.log(transform(rev(lowStr)));
    return transform(lowStr) == transform(rev(lowStr));
}       
const str = 'race car';
console.log(str);
console.log(palindrome(str));
