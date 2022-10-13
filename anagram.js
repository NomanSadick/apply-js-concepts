// Make a function that take two string as argument and determine these are Anagram or not 
const anagram = (str1, str2) => {
    str1 = str1.toLowerCase().split("").sort().join(); 
    str2 = str2.toLowerCase().split("").sort().join(); 
    return str1 === str2;
}

console.log(anagram("Finder", 'friend'));