// Remove duplicate array from an array
// one way
const names = [1, 3, 7, 1, 9, 3, 44, 55, 7, 27, 9, 55];
const uniqueArray = [];
for (const element of names) {
    let index = uniqueArray.indexOf(element);
    if (index == -1) {
        uniqueArray.push(element)
    }
}
console.log(uniqueArray);

// second way

// Always indexOf return 1st index of value or element

const unique = names.filter(function(value, index, array) {
    return array.indexOf(value) === index;
});
console.log(unique);

// Get duplicate array from an array
const duplicate = names.filter(function(value, index, array) {
    return array.indexOf(value) !== index;
})
console.log(duplicate);

const unique2 = names = names.filter((value, index, array) => array.indexOf(value) !== index);
const output = unique2(names);
console.log(output);


// const arry = [1, 2, 1, 3, 4, 3, 5];

// const toFindDuplicates = arry => arry.filter((item, index) => arr.indexOf(item) !== index);
// const duplicateElementa = tofindDuplicates(arry);
// console.log(duplicateElements);

