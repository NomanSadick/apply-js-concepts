// function Person(name, age) {
//     // let person = Object.create(Person.prototype);

//     this.name = name;
//     this.age = age;

//     // return person;
// }

// Person.prototype = {
//     eat() {
//         console.log(`Person is eating`);
//     },  
//     sleep() {
//     console.log(`Person is sleeping`);
//     },
// }

// const sakib =  new Person("Sakib", 35);
// sakib.sleep();
// const tamim = new Person("Tamim", 45);

class Person {
    constructor(name, age) {
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

const sakib =  new Person("Sakib", 35);
sakib.sleep();
const tamim = new Person("Tamim", 45);