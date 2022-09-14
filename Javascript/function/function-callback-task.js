var filter=[];
function myFilter(my_array, callback){
    console.log(filter);
}
/*Here, my_array is an array of numbers and callback is a function that takes
the elements of my_array as its parameter and returns a boolean true if
the element is even or false if the element is odd.

The myFilter function should return the filtered array.*/

function callback(my_array){
    for(var i=0; i<=my_array.length-1; i++){
        if (my_array[i]%2===0){
            filter.push(my_array[i]);
            return true;
        }
        else {
            return false; 
        }
    }
}
my_array=[4,5,6,7,8,9];