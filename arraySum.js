// Sum of all numbers in an array
const numbers = [ 39, 60, 20, 15, 99, 309, 200, 455 ];

const getArraySum = (numbers) => {
    let sum = 0;
    for (const element of numbers) {
        sum = sum + element;
    }
    return sum;
}

const output = getArraySum(numbers);
console.log(output);

const result = getArraySum([ 39, 60, 20, 15 ]);
console.log(result);