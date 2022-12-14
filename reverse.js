// one way
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


// Second way
function reverse(str) {
    let stack = [];
    // push letter into stack
    for (let i = 0; i < str.length; i++) {
        stack.push(str[i]);
    }
    // pop letter from the stack
    let reverseStr = '';
    while (stack.length > 0) {
        reverseStr += stack.pop();
    }
    return reverseStr;
}
console.log(reverse('JavaScript Stack')); //kcatS tpircSavaJ

