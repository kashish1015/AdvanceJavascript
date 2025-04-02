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
// console.log(tester);

function addTwoNumbers() {
    let x = prompt("Enter a number:");
    let y = prompt("Enter another number:");

    let num1 = parseInt(x);
    let num2 = parseInt(y);

    let sum = num1 + num2;
    console.log("The sum is: " + sum);
    return sum;
}

addTwoNumbers();



