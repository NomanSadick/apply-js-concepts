function myDisplayer(some) {
    console.log(some);
}

function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}

myCalculator(5, 5, myDisplayer)

// 1. myDisplayer is a function that takes one parameter, some, and simply logs the value of some to the console.
// 2. myCalculator is another function that takes three parameters: num1, num2, and myCallback. This function calculates the sum of num1 and num2, then calls the provided myCallback function, passing the result (the sum) as an argument to myCallback.
// 3. In the myCalculator function, let sum = num1 + num2; calculates the sum of num1 and num2.
// 4. myCallback(sum); calls the myCallback function, passing the calculated sum as an argument.
// 5. Finally, myCalculator(5, 5, myDisplayer); invokes the myCalculator function with the values 5 and 5 as the first two arguments, and myDisplayer as the callback function.
// Here's what happens when myCalculator is called:
// It calculates the sum of 5 and 5, which is 10.
// It then calls the myDisplayer function, passing 10 as an argument.
// As a result, myDisplayer logs the value 10 to the console.
