
//  Find the missing number in the array
const findMissingArray = (input) =>{
    let n = input.length + 1;
    let sum = 0;
    for (const i in input) {
        sum += input[i];
    }
    return Math.floor((n * (n + 1)) / 2) - sum;
}
  
const output = findMissingArray([1, 2, 3, 4, 6, 7, 8, 9, 10])

console.log(output);


// Find the  one or more missing number in the array
const missing =(arr) => {
    let missArray = [];
    let minArray = Math.min(...arr);
    let maxArray = Math.max(...arr);

    // indexOf() return it's position , not there in -1
    for(i = minArray; i < maxArray; i++){
        if (arr.indexOf(i) < 0) {
            missArray.push(i);
        }
    }
    return missArray;
}

const result = missing([1, 2, 4, 6]);
const result2 = missing([-2, -3, 2, 7]);
console.log(result);
console.log(result2);