let methodPerson = {
   eat() {
        console.log(`Person is eating`);
    },

   sleep() {
        console.log(`Person is sleeping`);
    },
}

function Person(name, age) {
    let person = Object.create(methodPerson);
    console.log(person);

    person.name = name;
    person.age = age;

    return person;
}

const sakib = Person('Sakib', 30);
sakib.eat()
const tamim = Person('Tamim', 40);

// const captain = {
//     name: 'Mas',
//     age: 45,
// }

// const player = Object.create(captain);
// console.log(player.age);