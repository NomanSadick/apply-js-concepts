const mixedAra = {
    a: "Johan",
    b: null,
    c: 40,
    d: "run",
    e: "",
    f: undefined,
    g: 32,
    h: false,
    i: 0,
    j: NaN,
    k: true,
};


const trueObject = obj => {
    for (let i in obj) {
        if (!obj[i]) {
            delete obj[i];
        }
    }
    return obj;
}

console.log(trueObject(mixedAra));


   
