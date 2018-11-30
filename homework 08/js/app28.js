'use strict'

let a = [1, 2, 3, 4, 5, 6];
let b = [];
for (let i = 0; i <a.length; i++) {
    b.push(a[i+1]);
    b.push(a[i]);
    i++;
}

console.log(b);