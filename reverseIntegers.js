const revInt = num => {
    let revMyNum = num.toString().split("").reverse().join("");
    if (revMyNum.endsWith(("-"))) {
        revMyNum  = "-" + revMyNum; 
    }
    return parseInt(revMyNum);

}
const output = revInt(-123);
console.log(output);


// 1.
const numbers = [1, 2, 3];
for (var index = 0; index < numbers.length; index++);{
  const number = numbers[index];
  console.log(number);
} //output undefined 

// 2.
function crazyFunction() {
    var a = (b = 10);
  }
  crazyFunction();
  console.log("b", typeof b === "undefined");//b false
  console.log("a", typeof a === "undefined"); //a true 

 
  