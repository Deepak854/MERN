function higher(num){
    return function(i){
        console.log(num +" * " + i +" =  " + num*i);
    }
}

var printTableItem = higher(13);

console.log(`table of : ${13}`)
for(var i=1; i<=10; i++){
        printTableItem(i);
}




