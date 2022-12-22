//* hoisting mean tene upore tola 
//* var keyword diye declare korle just declare ar part ta upore tene tole and value assign kore dai undefined 

//* let keyword diye declare korle ai taw declare ar part ta upore tene tole thiki but instantly value assign kore dai na undefined.je jaigai let declare kori oikhanai value undefined set kore

// ai vabe vabte pari 
// let a;
// console.log(a);
// a = undefined;
// a = Bangladesh;
// let a = "Bangladesh";
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

//3. example function ar khetre kivabe hoisting hoi
// myFunc()
// function myFunc() {
//     console.log(`I love JavaScript`);
// }
//4. example
// function myFunc() {
//     language = 'JavaScript';
//     var language;
//     console.log(language);
// }
// myFunc()

// 5. example
myFunc()
const myFunc = function () {
    let language = 'JavaScript';
    console.log(language);
}



