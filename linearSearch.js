// Implement linearSearch() function
// input: linearSearch(["a", "b", "c", "d", "c"], "c");
// output: return 2 or not found

function linearSearch(array, target){
    for (let i in array) {
        if (array[i] === target) 
        return i
    }
    return "Not Found";
}

console.log(linearSearch(["a", "b", "c", "d", "c"], "c")); //Not Found
console.log(linearSearch([1, 2, 3, 4], 1)) // 0
console.log(linearSearch([1, 2, 3, 4], 4)) // 3
console.log(linearSearch([1, 2, 3, 4], 6)) // Not Found
console.log(linearSearch([3, 4, 1, 6, 3], 6)) // 3