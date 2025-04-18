//classes are a blyeprint or template for object creation
//properties aur methods ek baar likhna is sufficient
//class is just a declaration
//class is  a collection of attributes and methods


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
//constructor to initialize object attribute values.
//constructor automatically initialize ho jaata hai
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


//METHODS are user defined function
//Functions on a class are called methods.When defining these methods,we dont use function keyword,we start directly with name
// class Person {
//     constructor(firstname,lastname){
//         this.firstname=firstname;
//         this.lastname=lastname;
//     }
//     greet(){
//         console.log("hi there! I'm",this.firstname);
//     }
//     compliment(name,object){
//         return "That's a wonderful" + object + ","+ name;

//     }
// }
// let p= new Person("kashish","singh");
// p.greet();
// let compliment=p.compliment("Harry","hat");
// //apne hi attributes bna kar krenge
// console.log(compliment);

//PROPERTIES are sometime called as fields,holds the data of the class.It is the initial case.This is the first step of abstraction
// class Person{
//     constructor(firstname,lastname){
//     this.firstname=firstname;
//     this.lastname=lastname;
// }
// }
// let p=new Person("kashish","single");
// console.log("hi",p.firstname);

//private access specifier
//#daalenge to make it private
// class Person {
//     #firstname;
//     #lastname;
//     constructor(firstname, lastname) {
//         this.#firstname = firstname;
//         this.#lastname = lastname;
//     }
// }
// let p = new Person("kashish", "single");
// console.log("hi", p.firstname);
//undefined mtlb class ne koi value return nhi kar raha

//validation
// class Person {
//     #firstname;
//     #lastname;

//     constructor(firstname, lastname) {
//         if (firstname.startsWith("M")) {
//             this.#firstname = firstname;
//         } else {
//             this.#firstname = "M" + firstname;
//         }
//         this.#lastname = lastname;
//     }

//     getData() {
//         return `First Name: ${this.#firstname}, Last Name: ${this.#lastname}`;
//     }
// }

// let p = new Person("kay", "Moon");
// console.log(p.getData());



//getters 
// A getter is a method that gets the value of a property. It allows you to access a value like a regular property, but behind the scenes, it runs a function.
//get always returns a value
//setters can set or reinitialize the value
// class Person {
//     #firstname;
//     #lastname;
//     constructor(firstname, lastname) {
//         this.#firstname = firstname;
//         this.#lastname = lastname;
//     }
//     get firstname() {
//         return this.#firstname;
//     }

//     set firstname(firstname){
//         this.#firstname=firstname;
//     }
//     get lastname(){
//         return this.#lastname;
//     }
//     set lastname(lastname){
//         this.#lastname=lastname;
//     }
// }
// let p= new Person("kashish","singh");
// p.firstname="Ayush";
// console.log(p.firstname);
//direct access kr le rhe data ko hide kr le rhe encapsulation ho rha

//INHERITANCE
//reusability of code
//inherits properties and methods of parent class
//super keyword child se parent ko call krna hai toh
// class Vehicle {
//     constructor(color, currentSpeed, maxSpeed) {
//         this.color = color;
//         this.currentSpeed = currentSpeed;
//         this.maxSpeed = maxSpeed;
//     }
//     move() {
//         console.log("moving at", this.currentSpeed);
//     }
//     accelerate(amount) {
//         this.currentSpeed += amount;
//     }
// }
// class Motorcycle extends Vehicle {
//     constructor(color, currentSpeed, maxSpeed, fuel) {
//         super(color, currentSpeed, maxSpeed);
//         this.fuel = fuel;
//     }
//     doWheelie() {
//         console.log("Driving on one wheel");

//     }

// }
// let motor=new Motorcycle("Black",0,250,"gasoline");
// console.log(motor.color);
// motor.accelerate(50);
// motor.move();
//we cannot access any Motorcycle specific properties or methods in our vehicle class

//PROTOTYPES
//that makes it possible to have objects.When nothing is specified when creating a class the objects inherits from objecy.prototype prototype.
//CLassName.prototype
//to add properties or methods to an object
class Person {
    constructor(firstname,lastname){
        this.firstname=firstname;
        this.lastname=lastname;
    }
    greet(){
        console.log("hi there! I'm",this.firstname);
    }
}
Person.prototype.introduce = function () {
    console.log("Hi,I'm",this.firstname);
};
Person.prototype.favouriteColor = "green";
let p = new Person("Kashish","Singh");
console.log(p.favouriteColor);
p.introduce();
