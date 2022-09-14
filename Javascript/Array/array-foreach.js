const items = ["item1", "item2", "item3"];

//using for loop copy elemenets of an array to another array
let copyItem1 = [];
for (let item of items){
    copyItem1.push(item);
}
console.log(copyItem1);

//using forEACH copy elemenets of an array to another array

let copyitem2 = [];
items.forEach((item) =>{
copyitem2.push(item);
});
console.log(copyitem2);

