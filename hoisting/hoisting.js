//* hoisting mean tene upore tola 
//* var keyword diye declare korle just declare ar part ta upore tene tole and value assign kore dai undefined 

//* let keyword diye declare korle ai taw declare ar part ta upore tene tole thiki but instantly value assign kore dai na undefined.je jaigai let declare kori oikhanai value undefined set kore

// ai vabe vabte pari 
// console.log(a);
// let a = "Bangladesh";
// a = "Bangladesh"
// console.log(a);

// let 
// let a;
// console.log(a);
// a = undefined;
// a = Bangladesh;
// let a = "Bangladesh";
// let b;
// console.log(b); output 
//2. example
// var LANGUAGE = 'JAVA';
// var language = 'JavaScript';
// function getLanguage() {
//     if (!language) {
//         var language = LANGUAGE;
//     }
//     return language
// }
// console.log(`I love ${getLanguage()}`); // output java
// let 
// let LANGUAGE = 'JAVA';
// let language = 'JavaScript';
// function getLanguage() {
//     if (!language) {
//         let language = LANGUAGE;
//     }
//     return language
// }
// console.log(`I love ${getLanguage()}`); // output JavaScript

//3. example function ar khetre kivabe hoisting hoi
// myFunc()
// function myFunc() {
//     console.log(`I love JavaScript`);
// }
//4. example
function myFunc() {
    //ai tar duniya ai tar vitori
    console.log(language); //output undefined
    var language = 'JavaScript';
}
myFunc()

var language = 'JavaScript';
console.log(language); //output JavaScript

// 5. example
// myFunc()
// const myFunc = function () {
//     let language = 'JavaScript';
//     console.log(language);
// }





