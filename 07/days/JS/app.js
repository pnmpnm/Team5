'use strict';

let one = 'Понедельник';
let two = 'Вторник';
let three = 'Среда';
let four = 'Четверг';
let five = 'Пятница';
let six = 'Суббота';
let seven = 'Воскресенье';
let daynum = prompt('Номер дня', 1);

switch (daynum){
    case '1':
        alert(one);
        break;
    case '2':
        alert(two);
        break;
    case '3':
        alert(three);
        break;
    case '4':
        alert(four);
        break;
    case '5':
        alert(five);
        break;
    case '6':
        alert(six);
        break;
    case '7':
        alert(seven);
        break;
    default:alert("Такого дня недели не существует!");
}