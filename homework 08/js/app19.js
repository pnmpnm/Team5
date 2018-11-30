'use strict'

let arr = [7, 9, 3, 1, 6, 2, 5, 8, 4, 10];
let a = 0;
for(let i = 0; i < arr.length; i++) {
  a += arr[i];
  if(a > 10) {
    console.log(i + 1);
    break;
  }
}