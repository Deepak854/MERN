const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// filter the array  that contains only even numbers

//   [1.] my way

let evenNumer = [];
for (let i=0; i<num.length; i++) {
    if (num[i] % 2 == 0){
        evenNumer.push(num[i]);
    }
}
console.log(evenNumer);

// [2.] using the filter function


// function to check even numbers
function evenCheck(num){
    return num %2 == 0;
}
let evenNumer2 = num.filter(evenCheck);
console.log(evenNumer2);


