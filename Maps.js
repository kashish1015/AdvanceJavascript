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
// const fruits = new Map([
//     ["apples",500],
//     ["bananas",300],
//     ["oranges",200]
// ]);
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

// let total=0;
// for(const x of fruits.values()){
//     total+=x;
// }
// console.log(total);

//creating objects
// const apples = {name:'Apples'};
// const bananas={name:'Bananas'};
// const oranges={name:'Oranges'};

//create a map
// const fruits=new Map();

// fruits.set(apples,500);
// fruits.set(bananas,300);
// fruits.set(oranges,200);
// //the key is an object not a string
// fruits.get("apples");//returns undefined
// console.log(fruits);

//JavaScript Map.groupBy() 
//The Map.groupBy() method groups element of an object according to the sting values
//The Map.groupBy() method does not changr the original object

//create an array
// const fruits=[
//     {name:"apples",quantity:300},
//     {name:"bananas",quantity:500},
//     {name:"oranges",quantity:200},
//     {name:"kiwi",quantity:300}
// ]
// //Callback is the function as parameter
// function myCallback({quantity}){
//     return quantity>200?"ok":"low";
// }
// //group by quantity
// const result= Map.groupBy(fruits,myCallback);
// console.log(result);

//JavaScript DESTRUCTURING
//The destructuring assignment syntax unpack object properties into variables
// const person={
//     firstName:"John",
//     lastName:"Doe",
//     age:50
// };
//Destructuring
// let{firstName,lastName}=person;

//order of properties does not matter but keys should be same
// console.log(firstName);

//Destructure is not destructive
//destructing does not change the original object
// let{firstName,lastName,country="US"}=person;
// console.log(firstName);
// console.log(country);

//object property Alias
// let{lastName:name}=person;
// console.log(lastName);
// console.log(name);

//String Destructuring
// let name="GurukulTheSchools";
// let[a1,a2,a3,a4,a5]=name;

// console.log(a1);
// console.log(a2);
// console.log(a3);
// console.log(a4);
// console.log(a5);
// //Array Destructuring
// const fruits=["Bananas","Oranges","Apples","Mangoes"];
// let[fruit1,fruit2]=fruits;
// console.log(fruit1);
// console.log(fruit2);

//Skipping array values
// const fruits=["Bananas","Oranges","Apples","Mangoes"];
// let [fruit1,,,fruit2]=fruits;
// console.log(fruit1);
// console.log(fruit2);

//Array position values
// const fruits=["Bananas","Oranges","Apples","Mangoes"];
// let{[0]:fruit1,[1]:fruit2}=fruits;//alias way hi hai ye bhi
// console.log(fruit1);
// console.log(fruit2);

//rest property
// const numbers=[10,20,30,40,50,60,70];
//destructuring
// const[a,b,...rest]=numbers
// console.log(a);
// console.log(b);
// console.log(rest);

// const fruits= new Map([
//     ["apples",300],
//     ["bananas",500],
//     ["oranges",200]
// ]);
// let text="";
// for(const[key,value] of fruits){
//     text+=key+ "is"+value;
// }
// console.log(text);

//swapping two variables in js
// let firstName="john";
// let lastName="doe";
// //destructuring
// [firstName,lastName]=[lastName,firstName];
// console.log(firstName);
// console.log(lastName);

//JavaScript Exponentiation(**)
// let x=5;
// let z=x**2;
// console.log(z);

//Math function
// let x=5;
// let z=Math.pow(x,2);
// console.log(z);
//Exponentiation assignment
// let x=5;
// x**=2//complex assignment can work as well as reinitialize
// console.log(x);

//JavaScript Array includes()
// const fruits=["Bananas","Oranges","Apples","Mangoes"];
// console.log(fruits.includes("Mangoes"));

//Start the search at position 3:
// fruits.includes("Bananas",3);
//includes() method is case sensitive
//syntax=>array.includes(start,)
//Trailing comma also known as dangling or terminal comman,is a comma symbol that is typed after the last item of a list of elements.Since the introduction of js language,trailing commas have been legal in array literals aarays.And wtih the introduction of ES2017,also known as ES8,trailing commas became allowed prtty much everywhere
// const arr=[
//     "one",
//     "two",
//     "three",
// ];
// console.log(arr);

// const arr=[
//     "one",
//     "two",
//     "three",,
// ];
// console.log(arr);
// console.log(arr.length);

// const sparseArray=[1,,,4,5,,];
// console.log(sparseArray);

//Using trailing commas in objects
// const person = {
//     firstName:"John",
//     lastNmae:"Davis",
//     age:30,
// }
// console.log(person);

//sparse object nhi create kar skte
// const person = {
//     firstName:"John",
//     ,

//     age:30,
// }
// console.log(person);
// function createRectangle{
//     w,
//     h
// }{/*..*/}

