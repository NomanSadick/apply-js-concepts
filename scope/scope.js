if (true) {
    var a = "US";
}
console.log(a);


// ***Function Scope
// Variables declared with var, let and const are quite similar when declared inside a function.
// They all have Function Scope:
// code here can NOT use carName
function myFunction() {
    let carName = "Volvo";
    console.log(carName);
    // code here CAN use carName
  }
//   myFunction()
  // code here can NOT use carName

// ***Global JavaScript Variables
// A variable declared outside a function, becomes GLOBAL.
// A global variable has Global Scope:
// All scripts and functions on a web page can access it. 
let x = "Volvo";
// code here can use carName

function myFunction() {
    console.log(window.x);
// code here can also use carName
}

myFunction()