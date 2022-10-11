const marks = [ 39, 60, 20, 15, 99, 309, 200, 455, 450 ];
let max = marks[0];

// marks.forEach(element => {
//     if (element > max) {
//         max = element;
//     }
// });


for (const element of marks) {
    if (element > max) {
        max = element;
    }
}
console.log("Highest value is:", max);