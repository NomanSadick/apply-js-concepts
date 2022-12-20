// implicit binding 
// explicit binding 
// new binding 
// window binding 

//1. implicit binding understand this
// var Person = function(name, age) {
//     return {
//         name: name,
//         age: age,
//         printName: function() {
//             console.log(this.name);
//         },
//         father: {
//             name: 'Mr. XXXX',
//             printName: function() {
//                 console.log(this.name);
//             }
//         }
//     }
// }

// var sakib = Person("Sakib", 44)
// sakib.printName()
// sakib.father.printName()

//2. explicit binding 
// var printName = function(v1, v2, v3) {
//     console.log(`${this.name} is ${v1}, ${v2} & ${v3}`);
// }

// var sakib = {
//     name: 'Sakib',
//     age:67,
// }
// var v1 = "Handsome";
// var v2 = "All-rounder"
// var v3 = "Best palyer;"
// printName.bind(sakib, v1, v2, v3)

//3. new binding

function Person(name, age){
    this.name = name;
    this.age = age
    console.log(`${this.name} is ${this.age} years old`);
}

var sakib = new Person('Sakib al hassan', 77)

//4. window binding 
var PrintName = function() {
   console.log(this.name);   //undefined 
}

var sakib = {
    name: 'Sakib',
};

PrintName()