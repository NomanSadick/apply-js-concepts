var varVariable = "US";
console.log(varVariable);
if (true) {
    var varVariable = "Bangladesh";// It's global, function scope,so can accessed from outside the block because of function scope 
}
console.log(varVariable);


if (true) {
    let letVariable = "Bangladesh";// It's block scope,so can not accessed from outside the block
}

console.log(letVariable);