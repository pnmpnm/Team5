'use strict';

let первый = 'Понедельник';
let второй = 'Вторник';
let третий = 'Среда';
let четвертый = 'Четверг';
let пятый = 'Пятница';
let шестой = 'Суббота';
let седьмой = 'Воскресенье';
let daynum = prompt('Номер дня', 1);

switch (daynum){
    case '1':
        alert(первый);
        break;
    case '2':
        alert(второй);
        break;
    case '3':
        alert(третий);
        break;
    case '4':
        alert(четвертый);
        break;
    case '5':
        alert(пятый);
        break;
    case '6':
        alert(шестой);
        break;
    case '7':
        alert(седьмой);
        break;
    default:alert("Такого дня недели не существует!");
}