// The FizzBuzz challenge goes something like this:

// console logs the numbers from 1 to n, where n is the integer the function takes as its parameter
// logs fizz instead of the number for multiples of 3
// logs buzz instead of the number for multiples of 5
// logs fizzbuzz for numbers that are multiples of both 3 and 5

const fizzBuzz = (n) => {
    for(let i = 1; i <= n; i++){
        if (i % 15 === 0) {
            console.log(`${"i"} is FizzBuzz`);
        }else if (i % 3 === 0) {
            console.log(`${i} is Fizz`);
        }else if (i % 5 === 0) {
            console.log(`${i} is Buzz`);
        }else{
            console.log(i);
        }
    }
}
fizzBuzz(20);