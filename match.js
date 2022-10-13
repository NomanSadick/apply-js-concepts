const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';

const match = paragraph.match(/the/gi);

const output = match ? match.length : 0;
console.log(output);

let position = paragraph.search(/thes/i);
position = position >= 0 ? position : "Not Found";
console.log(position);