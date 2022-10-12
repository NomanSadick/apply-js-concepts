// First way 
const speech = "Bangladesh forms the  sovereign part of the     historic and ethnolinguistic region of Bengal.";
let count = 0;
for (i=0; i<speech.length; i++) {
    let char = speech[i]
    // console.log(char);
    if (char == " " && speech[i-1] != " ") {
        count++;
    }
}
count++;
console.log(count);

// Second way

function countWords(str) {
    const arr = str.split(' ');
  
    return arr.filter(word => word !== '').length;
  }
  
  console.log(countWords('One two three'));
  console.log(countWords('This is a long string')); 