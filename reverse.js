const statement = "Bangladesh forms the sovereign part of the historic and ethnolinguistic region of Bengal.";
function reverseStr(str) {
    let reverse = "";
    for (const element of str) {
        reverse = element + reverse;
    }
    return reverse;
}

const output = reverseStr(statement);
console.log(output);
