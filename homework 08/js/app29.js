'use strict'

let a = [1, 2, 3, 4, 5, 6];
let b = [];
for (let i = a.length - 1; i >=0 ; i--) {
    b.push(a[i-1]);
    b.push(a[i]);
    i--;
       
}

console.log(b);



