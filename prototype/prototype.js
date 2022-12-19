

// function Person(name, age) {
//     // let this = Object.create(PersonWithNew.prototype);
//     this.name = name;
//     this.age = age;

//     // return this;
// }

// Person.prototype = {
//     eat() {
//          console.log(`Person is eating`);
//      },
 
//     sleep() {
//          console.log(`Person is sleeping`);
//      },
//  }
 


 
// const sakib = new Person('Sakib', 30);
// sakib.eat();
// const tamim = new Person('Tamim', 40);

// class base object oriented

class Person {
    constructor (name, age) {
        this.name = name;
        this.age = age;    
    }

    eat() {
        console.log(`Person is eating`);
    }

   sleep() {
        console.log(`Person is sleeping`);
    }
}
const sakib = new Person('Sakib', 30);
sakib.eat();
const tamim = new Person('Tamim', 40);

// example
let person = new Array();
console.log(Array.prototype);



