const speech = "Bangladesh forms the  sovereign part of the   historic and ethnolinguistic region of Bengal.";
let count = 0;
for (const char of speech) {
    // console.log(char);
    if (char == " " && char != " ") {
        count++;
    }
}
count++;
console.log(count);

function countWords(str) {
    const arr = str.split(' ');
  
    return arr.filter(word => word !== '').length;
  }
  
  console.log(countWords('One two three'));
  console.log(countWords('This   is  a long string')); 