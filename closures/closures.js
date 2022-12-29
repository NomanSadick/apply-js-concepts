//1. easy closures example
// let num1 = 3;
// let num2 = 2;
 
// var sum = function() {
//     return num1 + num2;
// };

// console.dir(sum);

//2.closures example
// var num1 = 3;
// var sum = function () {
//     var num2 = 2;
//     return function (){
//         return num1 + num2;
//     }
// };
// const myFunc = sum();
// console.dir(myFunc);

//3.closures example
// function bankAccount (initialBalance) {
//     var balance = initialBalance;
//     return function () {
//         return balance;
//     }
// }
// var account = bankAccount(10000);
// console.dir(account);

//4.closures example important and interview questions
for (var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 3000);  
}
console.log(i);