let object = {
    value1: 1,
    value2: 2,
    value3: 3,
    value4: 4,
};


// console.log(Object.entries(object));
function* generators(obj) {
    const entries = Object.entries(obj); //[[ 'value1', 1 ],[ 'value2', 2 ],[ 'value3', 3 ],[ 'value4', 4 ]]
    for (const element of entries) {
        yield element[1]
    }
}

const iterator = generators(object);

// for (const element of iterator) {
//     console.log(element);
// }
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());


console.log([...iterator]);
