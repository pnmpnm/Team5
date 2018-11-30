'use strict'

function getDivisors (num) {
    
    let array = [];
    for(let i = 1; i <= num; i++) {
        if(num % i == 0) {
            array.push(i);
        }        
    }
    return (array);
 
};
console.log(getDivisors(16));


