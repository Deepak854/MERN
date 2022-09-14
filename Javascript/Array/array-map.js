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