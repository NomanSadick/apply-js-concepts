// Parent class 
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        console.log(`${this.name} is eating`);
    }

   sleep() {
        console.log(`Person is sleeping`);
    }
}

// Sub class 
class Cricketer extends Person {
    constructor(name, age, type, country) {
        super(name, age)
        this.type = type;
        this.country = country;
        this.name = name;
        this.age = age;
    }
  
    play() {
        console.log(`${this.name} is playng`);
    }
    
    eat() {
        super.eat();
        console.log(`${this.name} is eating rice`);
    }
}

let sakib = new Cricketer('Sakib', 34, "All ronder", "BD")
console.log(sakib.eat());


// getter, setter
//  class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     eat() {
//         console.log(`${this.name} is eating`);
//     }

//    get setName() {
//         return this.name;
//     }

//     set setName(name) {
//        this.name = name;
//     }
// }


// let sakib = new Person('Sakib', 45);
// let tamim = new Person('Tamim', 45);
// console.log(sakib.setName);// access property

// sakib.setName = 'Tamim'
// console.log(sakib.name);