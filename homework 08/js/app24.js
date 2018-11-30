'use strict'

let a = [3, 7, 11, 56, 34, 5, 2, 17, 9, 33];

function isNumberInRange (a) {
    return a > 0 && a < 10 ? true: false; 
};

let b = []; 
for (let i = 0; i < a.length; i++) {
	if (isNumberInRange(a[i])) {
		b.push(a[i]);
	}
}

console.log(b);
