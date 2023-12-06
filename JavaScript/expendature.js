function calculateTotalSpentByCategory(transactions){
var spendEstimates = {};
for(var i = 0; i< transactions.length; i++){
    var t = transactions[i];
    if(spendEstimates[t.category]){
        spendEstimates[t.category] += t.price;
    }else{
        spendEstimates[t.category] = t.price;
    }
}
var keys = Object.keys(spendEstimates);
let answer = [];
for(var i = 0; i< keys.length; i++){
    var category = keys[i];
    var obj = {
        category: category,
        totalSpent: spendEstimates[category]
    };
    answer.push(obj);
}
return answer;
}
var transactions = [
{
    id:1,
    category:'food',
    price:10
},
{
    id:2,
    category:'drink',
    price:10
},
{
    id:3,
    category:'food',
    price:15
},
{
    id:4,
    category:'drink',
    price:20
}
]
const ans = calculateTotalSpentByCategory(transactions);
console.log(ans);
