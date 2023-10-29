//1. easy closures example
// var num1 = 3;
// var num2 = 2;
 
// var sum = function() {
//     return num1 + num2;
// };

// console.dir(sum);

//1.1 
// let num1 = 3;
// let num2 = 2;
 
// var sum = function() {
//     return num1 + num2;
// };

// console.dir(sum);

// 2.closures example
// var num1 = 3;
// var sum = function () {
//     var num2 = 2;
//     return function (){
//         return num1 + num2;
//     }
// };
// const myFunc = sum();
// console.dir(myFunc);

// 3.closures example
// function bankAccount (initialBalance) {
//     var balance = initialBalance;
//     return function () {
//         return balance;
//     }
// }
// var account = bankAccount(10000);
// console.dir(account);



//4.closures example important and interview questions
for (let i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 3000);  
}
console.log(i);

//5.closures example
// enclosing scope
// (function () {
//     var num1 = 3;
//     var num2 = 2;

//     var sum = function() {
//     return num1 + num2;
//     };
//     console.log(sum());
//     console.dir(sum);

//     num1 = 5;
//     num2 = 6;

//     console.log(sum());
//     console.dir(sum);
// })();

//6.closures example

// function temporary () {
//     let counter = 0;

//     return function () {
//         counter = counter + 1;
//     }
// }

// const add = temporary();

// console.dir(add)
// add()
// console.dir(add)
// add()
// console.dir(add)
// add()

// 7 .
// function stopWatch() {
//     var startTime = Date.now();

//     function getDelay() {
//         console.log(Date.now() - startTime);
//     }
//     return getDelay();
// }

// var timer = stopWatch();
// for(var i = 0; i < 100000000; i++) {
//     var a = Math.random() * 1000000000;
// }

// timer();
