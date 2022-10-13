const mixedAra = [
    "Johan",
    null,
    40,
    "run",
    "",
    undefined,
    32,
    false,
    0,
    NaN,
    true,
];

// one way

const trueArray = mixedAra.filter((el) =>{
    if(el) {
        return true;
    }else{
        return false;
    }
});
console.log(trueArray);
// two way

const trueArray2 = mixedAra.filter(Boolean);
console.log(trueArray2);



