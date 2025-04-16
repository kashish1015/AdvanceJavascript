//classes are a blyeprint or template for object creation
//properties aur methods ek baar likhna is sufficient


//classes and objects
//objects are a collection of properties and methods
// let dog = {
//     dogName:"JavaScript",
//     weight:2.4,
//     color:"brown",
    
// };

// class ClassName{
//     constructor(prop1,prop2){
//         this.prop1=prop1;
//         //left class ka attribute hai right waala function parameter or variable defined in the function
//         this.prop2=prop2;
//     }
// }
// let obj = new ClassName("arg1","arg2");
// console.log(obj.prop1);
// console.log(obj.prop2);

//this keyword refers to the object it belongs to,so it is the first property of the instance of ClassName and classes are just some special function beneath the surface

// class Dog{
//     constructor(dogName,weight,color,breed){
//         this.dogName=dogName;
//         this.weight=weight;
//         this.color=color;
//         this.breed=breed;
//     }
// }
// let dog=new Dog("JavaScript","2.4","brown","chohuaha");
// // console.log(dog.dogName);
// // console.log(dog.weight);
// // console.log(dog.color);
// // console.log(dog.breed);
// console.log(dog.dogName,"is a",dog.breed, "and",dog.color,"and",dog.breed);


//Contructors=>invoked at the time of object creation
//class name with capital
//there can be only one constructor in a program
// class Person {
//     constructor(firstname,lastname){
//         this.firstname=firstname;
//         this.lastname=lastname;
//     }
// }
// let p= new Person("kashish","singh");
// console.log("Hi",p.firstname);


//METHODS
//Functions on a class are called methods.When defining these methods,we dont use function keyword.we start directly with name
class Person {
    constructor(firstname,lastname){
        this.firstname=firstname;
        this.lastname=lastname;
    }
    greet(){
        console.log("hi there! I'm",this.firstname);
    }
    compliment(name,object){
        return "That's a wonderful" + object+ ","+name;

    }
}
let p= new Person("kashish","singh");
p.greet();
let compliment=p.compliment("Harry","hat");
//apne hi attributes bna kar krenge
console.log(compliment);
