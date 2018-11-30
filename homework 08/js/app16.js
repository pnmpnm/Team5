'use strict'

let arr = [];
let str = 'x';
for (let i = 0; i < 10; i++) {
	arr.push(str);
	str += 'x';
}
console.log(arr);

