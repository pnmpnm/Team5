'use strict'

let a = [3, 8, 11, 56, 34, 5, 2, 18, 10, 33];

function isEven (a) {
	return a % 2 ? false: true; 
};

let b = []; 
for (let i = 0; i < a.length; i++) {
	if (isEven(a[i])) {
		b.push(a[i]);
	}
}

console.log(b);

