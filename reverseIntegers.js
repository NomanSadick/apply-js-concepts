const revInt = num => {
    let revMyNum = num.toString().split("").reverse().join("");
    if (revMyNum.endsWith(("-"))) {
        revMyNum  = "-" + revMyNum; 
    }
    return parseInt(revMyNum);

}
const output = revInt(-123);
console.log(output);