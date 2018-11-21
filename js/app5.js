'use strict'

let x = parseFloat(prompt('Введите значение X'));
let y = parseFloat(prompt('Введите значение Y'));
let radius = 1;
let hypotenuse_length = Math.sqrt(Math.pow(x) + Math.pow(y));

let isInRadius = hypotenuse_length <= radius;
let isInCorner = x >= -2 && x <= 0 && y <= 0 && y >=-2-x;

if (isInCorner || isInRadius)
    alert('Точка попадает в область');
else
    alert('Точка не попадает в область');
