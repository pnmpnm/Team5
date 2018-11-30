'use strict';

let a = prompt ('Введите номер квартиры');
if (a >= 1 && a <= 20) {
    alert ('1 подьезд');
} 
else if (a >= 21 && a <= 48) {
    alert ('2 подьезд');
} 
else if (a >= 49 && a <= 90) {
    alert ('3 подьезд'); 
} 
else {
    alert ('Вы ввели некоректное значение')
}

