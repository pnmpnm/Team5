'use strict'

let x = prompt('Координаты X');
let y = prompt('Координаты Y');

let isRightPart = x>=0 && x<=4 && y>=0 && y<=4-x;
let isLeftPart = x>=-4 && x<=0 && y>=0 && y<=x+4;

if(isLeftPart || isRightPart) {
    alert('Точка попадает в область');
}
else {
    alert ('Точка не попадает в область');
}
