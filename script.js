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
let addTwoNumbers = (x,y) =>  (x+y);
let resultArr =[];
for(let i =0 ;i<10;i++){
    let result = addTwoNumbers(i,2*i);
    resultArr.push(result);
}
console.log(resultArr);


