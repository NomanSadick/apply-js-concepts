//  How can you order alphabetically names of students in your class sequentially?
const students = ["Noman", "Sumon", "Babu", "Foial"];
console.log(students.sort());

// How can you order roll numbers of students in your class sequentially?

const students_roll = [1, 3, 6, 9, 2, 5];
console.log(students_roll.sort(function(a, b){
    return a - b;
}));
