'use strict'

let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
let sum = 0;
for(let i = 0; i < arr.length; i++) {
  for(let x = 0; x < arr[i].length; x++) {
    sum += arr[i][x].reduce(function(sum, item) {
    return sum + item;
    })
  }
}

console.log(sum)
