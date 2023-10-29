function Person(name, age) {
    this.name = name;
    this.age = age;
};

Person.prototype = {
    eat() {
        console.log(`Person is eating`);
    },

    sleep() {
        console.log(`Person is sleeping`);
    },

    play() {
        console.log(`Person is playing`);
    },
};

const sakib = new Person('Sakib', 30);
sakib.eat();
const tamim = new Person('Tamim', 40);



// create a object 
// const captain = {
//     name: 'Morris',
//     age: '34',
//     country: 'South Africa',
// };

// const player = Object.create(captain);
// console.log(player.name);

const persons = [];

let person = new Array();
person.push('sKK');
console.log(person);
