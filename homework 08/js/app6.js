'use strict';

let a = prompt ('Введите стаж работы');
if (a < 3) {
    alert ('Надбавка 0%');
} 
else if (a >= 3 && a < 10) {
    alert ('Надбавка 10%');
} 
else if (a >= 10 && a < 20) {
    alert ('Надбавка 20%'); 
} 
else if (a >=20) {
    alert ('Надбавка 25%')
}