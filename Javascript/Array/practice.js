let num = [2, 3, 4, 5, 6, 7, 8];
let squre = [];
for (var i=0; i<num.length; i++){
    squre.push(num[i]*num[i]);

}
console.log(squre);

//using function 

function squreArray(num){
    return num*num;
}
for ( let i=0; i<num.length; i++){
    num[i] = squreArray(num[i]);
}
console.log(num)

//using map function

let squre_number = num.map(squreArray);
console.log(squre_number)

//copy of the array

const items = ["item1", "item2", "item3", "item4", "item5"];

//my method
let copyItem = [];
for (let item of items){
    copyItem.push(item);
}
console.log(copyItem)
// using foreach method

const copyitem2 = [];
items.forEach((item) => {
    copyitem2.push(item);
});
console.log(copyitem2)

const value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

let pitch = ["rohit", "virat", "Rahul"];
let team= [];
pitch.forEach((item) => {
    team.push(item)
});
console.log(team);

let score = [34, 54, 43, 100, 157, 78];
function evenCheque(score) {
    return score%2  ==   0;
}
let evenNumer = score.filter(evenCheque);
console.log(evenNumer);


function oddCheque(score) {
    return score%2 !== 0;
}
let oddNumber = score.filter(oddCheque);
console.log(oddNumber);