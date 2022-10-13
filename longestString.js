// Find out longest string from an array and this index no

function longestString(array) {
    let longestWord = "";
    for (const names of array) {
        if (names.length > longestWord.length) {
            longestWord = names;
        }
    }
    return [longestWord, array.indexOf(longestWord)];
}

console.log(longestString(["Noman", "Fahamidul", "Jibon", "Monti"]));