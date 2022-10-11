// one way 
let a = 10;
let b = 15;
console.log("Before swap: a =", a, "b =", b );
let temp = a;
a = b;
b = temp;
console.log("After swap: a =", a, "b =", b );

// second way
let x = 5;
let y = 7;
x = x + y;
y = x - y;
x = x - y; 
console.log("After swap: x =", x, "y =", y );

// only for JS code
let p = 6;
let q = 4;
[p, q] = [q, p];
console.log("After swap: p =", p, "q =", q );