'use strict';

let birthday = prompt ('Введите год рождения');
let now = new Date();
let age = now.getFullYear() - birthday;
let message = 'Вам ' + age;   
if (age >=16) {
    alert (message + '. Добро пожаловать')
}
else {
    alert (message + '. Вход воспрещен')
}


