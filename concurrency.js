//concurrency=>things are happening at the same time or in parallel
//Callback=>a function  passed as an arguement.which is called when the rest of initial function has finished
// function doSomething(callback){
//     callback();
// }
// function sayHi(){
//     console.log("hi!");
// }
// doSomething(sayHi);

// function judge(grade){
//     switch(true){
//         case grade == "A":
//           console.log("You got an",grade,":amazing!");
//           break;
//         case grade == "B":
//           console.log("You got a",grade,":well done!");
//           break;
//         case grade == "C":
//           console.log("You got a",grade,":alright");
//           break;  
//         case grade == "D":
//           console.log("You got a",grade,":hmm...");
//           break; 
//         default:
//             console.log("An",grade,"!what?!"); 
//     }
// }
// function getGrade(score,callback){
//     let grade;
//     switch(true){
//         case score>=90:
//             grade="A";
//             break;
//         case score>=80:
//             console.log(score);
//             grade="B";
//             break;
//         case score>=70:
//             console.log(score);
//             grade="C";
//             break;
//         case score>=60:
//             grade="D";
//             break;
//         default:
//             grade="F";
//     }
//     callback(grade);
// }
// getGrade(85,judge);

//callbacks becomes really valuable in an asynchronous context,when one function is stil lwaiting for the results of a call to the database before calling the callback function that is going to process the data
// setInterval(encourage,500);
// function encourage(){
//     console.log("You're doing great,keep going!");
// }


//PROMISES=We can organize the sequence of our code in a slightly easier to maintain
//this function needs two parameters,and these parameters are callbacks.these parameters are resolve and reject
//promise is successful resolve() is called and unsuccessful toh reject() is called and the catch() methof on promise object is executed with arguement of reject() function
// let promise = new Promise(function(resolve,reject){
//     let x=20;
//     if(x>10){
//         resolve(x);
//     }else{
//         reject("Too low");
//     }
// });
// promise.then(
//     function(value){
//         console.log("Success:",value);
//     },
//     function(error){
//         console.log("Error:",error);
//     }
// );

//.then is always for resolve
// const promise=new Promise((resolve,reject)=> {
//     // resolve("successful!");
//     reject("failure");
// })
// .then(value => {
//     console.log(value);
//     return "we";
// })
// .then(value=>{
//     console.log(value);
//     return "can";
// })
// .then(value=>{
//     console.log(value);
//     return "chain";
// })
// .then(value=>{
//     console.log(value);
//     return "promises";
// })
// .then(value=>{
//     console.log(value);
    
// })
// .catch(value=>{
//     console.log(value);
// })
//Promises were therefore rejected,this catch() block would be executed
//Async and Await
