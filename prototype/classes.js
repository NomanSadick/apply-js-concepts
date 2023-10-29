// Parent class 
function Person(name, age) { 
    this.name = name;
    this.age = age;
}

// Subclass 
function Cricketer(name, age, type, country) {
    Person.call(this); //parent and child ar moddhe connection 1st step.r ai this hossce Cricketer ar this
    this.type = type;
    this.country = country;
    this.name = name;
    this.age = age;
}

Person.prototype = {
    eat() {
         console.log(`${this.name} is eating`);
     },
 
    sleep() {
         console.log(`Person is sleeping`);
     },
 }

 Cricketer.prototype = Object.create(Person.prototype) //2nd step
 Cricketer.prototype.constructor = Cricketer; //3rd step
  
 Cricketer.prototype.play = function () {
     console.log(`${this.name} is playng`);
 }

 let sakib = new Cricketer('Sakib', 34, "All ronder", "BD")
 console.log(sakib.name)



//  To create building function 
// Object.prototype.noman = function(){
//     console.log('I am a noman');
// }

// const p = {};

// p.noman()