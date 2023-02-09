var a = 1;
function one() {
    console.log(a);
    function two() {
        console.log(b);
        var b = 2;
        function three(d) {
            console.log(c + d);
            let c = 3;
        }
        three(4);
    }
    two();
}
one();

// scope
function hello () {
    const msg = "I am Johan";
}

hello();
console.log(msg);


// closure
var sum = 0;
function doSum () {
    return function(a) {
        return a + b;
    }
}

var temp = doSum(2);
sum = sum + temp(8);

// global execution context is created
let globalVar = "global"; 

function firstFunction() { 
  // function execution context for firstFunction is created
  let firstFunctionVar = "firstFunction"; 

  function secondFunction() { 
    // function execution context for secondFunction is created
    let secondFunctionVar = "secondFunction"; 
    console.log(globalVar); // "global"
    console.log(firstFunctionVar); // "firstFunction"
    console.log(secondFunctionVar); // "secondFunction"
  }
  secondFunction();
}
firstFunction();