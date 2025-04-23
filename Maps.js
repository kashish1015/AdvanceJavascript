//Map() is a predefined class
// const fruits = new Map([
//     ["apples",500],
//     ["bananas",300],
//     ["oranges",200]
// ]);

//You can add elements to a Map with the set() method
//create a map
// const fruits = new Map();
// fruits.set("apples",500);
// fruits.set("banana",300);
// fruits.set("oranges",200);
// console.log(fruits);

//it can be reinitialized as well set ki functionality

//get() method get the value of key in a map
// fruits.get("apples");
// //fruits ka type object
// typeof fruits;
//we use typeof because its a loosely typed language type mention karne ki need nhi padti
//object is not directly iterable map is directly iterable
//object do nit have size property
//key must be string,map mein key can be of any type
//keys are not well ordered ,in maps keys are ordered by iteration

//JavaScript Map Methods
const fruits = new Map([
    ["apples",500],
    ["bananas",300],
    ["oranges",200]
]);
// fruits.set("apples",200);
// // fruits.delete("oranges");
// fruits.has("apples");
// console.log(fruits);
// console.log(fruits.size);

//Map.delete() particular key ko delete
//fruits.delete("apples");
//fruits.clear(); poora delete kr dega
//Map.has()=>method returns true if a key exists in a map


//Map.forEach()= method invokes a callback for each key/value pair in a map
// let text ="";
// fruits.forEach(function(value,key){
//     text+=key+'='+value;
// })
// console.log(text);

//Map.entries() =>returns an iterator object with [key,values]in a map
// let text ="";
// for(const x of fruits.entries()){
//     text+=x;
// }
// console.log(text);

//Map.keys()
// let text="";
// for(const x of fruits.keys()){
//     text+=x;
// }
// console.log(text);

//Maps.values()
// let text="";
// for(const x of fruits.values()){
//     text+=x;
// }
// console.log(text);

let total=0;
for(const x of fruits.values()){
    total+=x;
}
console.log(total);

