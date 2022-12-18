// create higher order function 
// function hello() {
//     return function() {
//         console.log("Hello");
//     }
// }

// hello()();

// higher order function before after

// example 1. without higher order function

// const numbers = [1, 2, 4, 7];
// let result = [];
// for (let i = 0; i < numbers.length; i++) {
//     result.push(numbers[i] * 2);
// }
// console.log(result);

// example 1. with higher order function
// const numbers = [1, 2, 4, 7];

// const result = numbers.map(function(number){
//     return number * 2;
// })

// const result = numbers.map(number => number * 2); arrow function 
// console.log(result);

// example 2. without higher order function
const players = [
    {
        name: 'Sakib',
        avg: 38.88,
    },

    {
        name: 'Tamim',
        avg: 36.12,
    },

    {
        name: 'Mushfifur',
        avg: 37.33,
    },

    {
        name: 'Mahbudullah',
        avg: 35.55,
    }
];
// const playerAvgWithThirtySeven = [];
// for (let i = 0; i < players.length; i++) {
//     if (players[i].avg >= 37) {
//         playerAvgWithThirtySeven.push(players[i])
//     }
// }

// console.log(playerAvgWithThirtySeven);

// example 2. with higher order function
const playerAvgWithThirtySeven = players.filter(player => player.avg >= 37);
console.log(playerAvgWithThirtySeven);

