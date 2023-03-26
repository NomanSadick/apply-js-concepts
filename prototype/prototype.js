// Prototype: prototype asole kichui na just akta javaScript property jaita akta object ke point kore.
// Constructor: 1 ta function er maddhome 1 ta object ke construct korchi

// const personMethods = {
//     eat() {
//          console.log(`Person is eating`);
//      },
 
//     sleep() {
//          console.log(`Person is sleeping`);
//      },
//  }

// function Person(name, age) {
//     let person = {};

//     person.name = name;
//     person.age = age;
//     person.eat = personMethods.eat;
//     person.sleep = personMethods.sleep;
    
//     return person;
// }

// const sakib = Person('Sakib', 34);
// const Tamim = Person('Tamim', 44);

function Person(name, age) {
    // let this = Object.create(Person.prototype);
    this.name = name;
    this.age = age;
    // return this;
}
Person.prototype = {
    eat() {
         console.log(`${this.name} is eating`);
     },
 
    sleep() {
         console.log(`Person is sleeping`);
     },
 }
const sakib = new Person('Sakib', 30);
sakib.eat();
const tamim = new Person('Tamim', 40);

// class base object oriented

// class Person {
//     constructor (name, age) {
//         this.name = name;
//         this.age = age;    
//     }

//     eat() {
//         console.log(`Person is eating`);
//     }

//    sleep() {
//         console.log(`Person is sleeping`);
//     }
// }
// const sakib = new Person('Sakib', 30);
// sakib.eat();
// const tamim = new Person('Tamim', 40);

// example
// let person = new Array();
// console.log(Array.prototype);


//Object.create:  player namok object create korlam on the basis of captain object.mane parent sob property autometic child access korte pare.
// const captain = {
//     name: 'Mashrafi',
//     age: 45,
//     team: 'BD',
// }

// const player = Object.create(captain);
// console.log(player.name);




