'use strict'

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let arr2 = [];
for(let i = arr.length - 1; i >= 0; i--) {
  arr2.push(arr[i]);
}

console.log(arr2)
