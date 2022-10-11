// random number between 1 tot 6
let num = 2.599;
const result = Math.floor(num);
const result2 = Math.ceil(num);
const result3 = Math.round(num);

for (let i = 0; i < 10; i++) {
    const result4 = Math.random(num) * 6;
    const output = Math.round(result4)
    console.log(output);
}

