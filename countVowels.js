const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

const countVowels = (sentence) => {
    let count = 0;
    const letters = Array.from(sentence);
    for (const value of letters) {
        if (vowels.includes(value)) {
            count++;
        }
    }
    
    return count;
}

console.log(countVowels("I am Noman Sadick."));