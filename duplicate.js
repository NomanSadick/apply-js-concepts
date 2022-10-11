// Remove duplicate array from an array
const names = [1, 3, 7, 1, 9, 3, 44, 55, 7, 27, 9, 55];
const uniqueArray = [];
for (const element of names) {
    let index = uniqueArray.indexOf(element);
    if (index == -1) {
        uniqueArray.push(element)
    }
}
console.log(uniqueArray);