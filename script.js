// function sayHello() {
//     let you = prompt("What's your name? ");
//     console.log("Hello",you + "I");
// }
// sayHello();
// let varContainingFunction = function() {
//     let varInFunction = "I'm in a function. ";
//     console.log("hi! there",varInFunction);
// };
// varContainingFunction();
// function tester(para1,para2){
//     return para1 + " " + para2;
// }
// const arg1 = "arguement 1";
// const arg2 = "arguement 2";
// tester(arg1, arg2);
// console.log(tester(arg1, arg2));

// function addTwoNumbers() {
//     let x = prompt("Enter a number:");
//     let y = prompt("Enter another number:");

//     let num1 = parseInt(x);
//     let num2 = parseInt(y);

//     let sum = num1 + num2;
//     console.log("The sum is: " + sum);
//     return sum;
// }

// addTwoNumbers();

// function addNumbers(num1, num2) {
//     return parseInt(num1) + parseInt(num2);
// }
// const result = addNumbers("10", "20");
// const result2 = addNumbers();
// const result3 = addNumbers("6","16");

// console.log(result);
//default parameters in functions
// function addTwoNumbers(x=2,y=3){
//     console.log(x+y);
// }
// addTwoNumbers(1,2);
// addTwoNumbers();



//ARROW FUNCTIONS
// let doingArrowStuff = x => console.log(x)
// doingArrowStuff("Great!");

// let addTwoNumbers = (x,y) => console.log(x+y);
// addTwoNumbers(5,3);

// const arr=["squirrel" ,"cat","buddy"];
// arr.forEach(e => console.log(e));




//spread operator
// let spread = ["so","much","fun"];
// let mess=["js","is",...spread,"and","powerful"];
// console.log(mess);

//example 2
// function addTwoNumbers(x,y){
//     console.log(x+y);
// }
// let arr=[5,9];
// addTwoNumbers(...arr);
//example 3
// function addFourNumbers(x,y,z,a){
//     console.log(x+y+z+a);
// }
// let arr=[5,9];
// let arr2=[6,7];
// addFourNumbers(...arr,...arr2);


//Rest Parameter
//comes on function defintion array ke form mein aajayenge
// function someFunction(param1, ...param2){
//     console.log(param1,param2);
// }
// someFunction("hi","there","how r uh?");


//Returning function values
// let addTwoNumbers = (x,y) =>  (x+y);
// let resultArr =[];
// for(let i =0 ;i<10;i++){
//     let result = addTwoNumbers(i,2*i);
//     resultArr.push(result);
// }
// console.log(resultArr);

// Returning with arrow function
// let addTwoNumbers=(x,y) => x+y;
// let result=addTwoNumbers(12,15);
// console.log(result);
// let addTwoNumbers = (x,y) => {
//     console.log("Addling...");
//     return x+y;
// }


//Variable scope in functions
//let and const both are block scope and let can be reinitialized and redeclared output is reference error and const is one time initialized and one time declared
//var is a function scope  we can access the variable before declaration but that value is undefined

// function testAvailability(x) {
//     console.log("Available here:",x);
// }
// testAvailability("Hi");
// console.log("Not Available here:",x);//this is called reference error

// function testAvailability() {
//     let y="Local Variable";
//     console.log("Available here:",y);
// }
// testAvailability();
// console.log("Not Available here:",y);

// function testAvailability() {
//          let y="I'll return";
//          console.log("Available here:",y);
//          return y;
//      }
// let z=testAvailability() {
//     console.log("Available here:",z);
//     console.log("Na:",y);
// }
// function doingStuff() {
//     if(true) {
//         var x = "local";
//     }
//     console.log(x);
// }
// doingStuff();
// function doingStuff() {
//     if(true) {
//         console.log(x);
//         let x = "local";
//     }
//     console.log(x);
// }
// doingStuff();
// function doingStuff() {
//     if(true) {
//         console.log(x);
//         var x = "local";
//     }
   
// }
// doingStuff();
// function doingStuff() {
//     if(true) {
//         const x= "local";
        
//     }
//     console.log(x);
   
// }
// doingStuff();


//Global Variable
// let globalVar = "Accessible anywhere";
// console.log("Outside function:",globalVar);
// function creatingNewScope(x){
//     console.log("Access to global vars inside function.",globalVar);
// }
// creatingNewScope("some parameter");
// console.log("Still available:",globalVar);

// let x="global";

// function doingStuff(){
//     let x="local";
//     console.log(x);
// }
// doingStuff();
// console.log(x);

//immediately invoked function expression(IIFE)
//define krte hi invoke kr skte hain
//example of primitive function
// (function() {
//     console.log("IIFE!");
// })();

//arrow function ko bhi as IIFE use kar sakte hain
// (()=> {
//     console.log("run right away");
// })();

//Recusive functions
// function getRecursive(nr) {
//     console.log(nr);
//     getRecursive(--nr);
// }
// getRecursive(3);
//stack overflow ho rha toh this is because memory limited hai toh but chala ye infinite tkk hi hai
// function getRecursive(nr) {
//     console.log(nr);
//     if(nr>0){
//     getRecursive(--nr);
// }
// }
// getRecursive(3);

//changing the position of console
// function getRecursive(nr) {
    
//     if(nr>0){
//     getRecursive(--nr);
// }
//     console.log(nr);  
// }
// getRecursive(3);

// function logRecursive(nr){
//     console.log("Started function:",nr);
//     if(nr>0){
//         logRecursive(nr-1);
//     }else{
//         console.log("done with function");
//     }
//     console.log("ended function:",nr)
// }
//     logRecursive(3);

//The performance of recursion is slightly worse than the performance of regular iteration.Iteration is faster.So if this causes bottleneck sitaution that would really slow down your application,then we might want to consider another approach

//Nested Functions
// function doOuterFunctionsStuff(nr){
//     console.log("Outer function");
//     doInnerFunctionStuff(nr);
//     function doInnerFunctionStuff(x){
//         console.log(x+7);
//         console.log("I can access outer variables:",nr);
//     }
// }
// doOuterFunctionsStuff(2);

//just another function example
// function outerFunction(nr){
//     doInnerFunction(nr);
//     function doInnerFunction(x) {
//         let z= 10;
//     }
//     console.log("Not accessible:",z);
// }
// outerFunction(2);

//Anonymous Function functions without name
// let functionVariable = function() {
//     console.log("Not so secret thought.");
    
// };
// functionVariable();

// //Function Callbacks=> passing a function as an arguement
// function doFlexibleStuff(executeStuff){
//     executeStuff();
//     console.log("Inside doFlexibleStuff:");
// }
// doFlexibleStuff(functionVariable);
//synchronous mtlb blocking code

//Built in Functions of js
//setTimeOut() is a special function that is executing a certain function after a specified amount of time that it will wait first.SetTimeOut() is one time execution
// let youGotThis = function () {
//     console.log("You're doing well!");
// };
// setTimeout(youGotThis,1000);

//setInterval()=>it will keep on executing it with the specified interval.Baar baar call karta hai terminate krne ke liye control c use krenge
// let youGotThis = function () {
//     console.log("You're doing well!");
// };
// setInterval(youGotThis,2000);


//Output Question
//Q1
//scope concept
// let val=10;
// function tester(val){
//     val+=10;
//     if(val<100) {
//         return tester(val);
//     }
//     return val;
// }
// tester(val);
// console.log(val);

//Q2
// let testFunction = function(){
//     console.log("Hello");
// }();

// Q3
// (function (){
//     console.log("Welcome");
// })();

//Q4
// (function () {
//     console.log("Welcome");
// })();
// (function(){
//     let firstName ="Laurence";
// })();
// let result = (function() {
//     let firstName="Laurecnce";
//     return firstName;
// })();
// console.log(result);
// (function(firstName) {
//     console.log("My name is"+ firstName);
// })("Laurence");

//Q5
// var addFive1 = function addFive1(num) {
//     return num+2;
// };
// let addFive2 = (num) => num+2;
// console.log(addFive1(14));














