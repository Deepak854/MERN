const str = ["javascript",  "Is", "Fun"];

function joinString(accumulator, currentvalue){
    return accumulator + currentvalue;
}
let joinedString = str.reduce(joinString)
console.log(joinedString);

//SUM OF ALL VALUES IN ARRAY

const score = [34, 54, 43, 100, 157, 78];

function sumOfNumber(accumulator, currentvalue){
    return accumulator + currentvalue;
}
let total = score.reduce(sumOfNumber);
console.log(total);