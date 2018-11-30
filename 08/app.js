'use strict';


// the task  1
let a = parseFloat(prompt('Введите первое число'));
let b = parseFloat(prompt('Введите второе число'));
if (a > b) {
    alert(a);
} else {
    alert(b);
}



// the task 2
let a = parseInt(prompt('Введите первое число'));
let b = parseInt(prompt('Введите второе число'));
if (a > b) {
    alert(a);
} else if (a < b) {
    alert(b);
} else if (a = b) {
    alert('Числа НЕ должны равняться');
}


// the task 3
let numberFlat = parseFloat(prompt('Введите номер квартиры'));
if (numberFlat >= 1 && numberFlat <= 20) {
    alert('Ваш подьезд №1');
} else if (numberFlat >= 21 && numberFlat <= 48) {
    alert('Ваш подьезд №2');
} else if (numberFlat >= 49 && numberFlat <= 90) {
    alert('Ваш подьезд №3');
} else if (numberFlat >= 91 && numberFlat <= 0) {    //why? не выводит на экран
    alert('Нет такой квартиры');
}


// the task   4
var user = prompt('Логин');
var password = prompt('Пароль');
let login = ['1', '2', '3'];
let pass = ['1', '2', '3'];
login[1] = 'ivan';
login[2] = 'alex';
login[3] = 'petr';
pass[1] = '334455';
pass[2] = '777';
pass[3] = 'b5678'
if (user == login[1] && password == pass [1]) {
    alert('Добро пожаловать');
} else if (user == login[2] && password == pass [2]) {
    alert('Добро пожаловать');
} else if (user == login[3] && password == pass [3]) {
    alert('Добро пожаловать');
} else {
    alert('ошибка входа');
}


// the task  5
let age = parseFloat(prompt('Год рождения: '));
let b = 2018 - age;
alert(b);
if (b >= 16) {
    alert('Добро пожаловать');
} else if (b <= 15) {
    alert('Вход воспрещен');
}


// the task  6
let experience = parseFloat(prompt('Ваш стаж работы'));
if (experience >= 0 && experience <= 3) {
    alert('Ваша надбавка составляет 0%');
} else if (experience >= 3 && experience < 10) {
    alert('Ваша надбавка составляет 10%');
} else if (experience >= 10 && experience < 20) {
    alert('Ваша надбавка составляет 20%');
} else if(experience >= 20) {
    alert('Ваша надбавка составляет 25%');
}



// the task 7
let from = 4;
let to = 400
while (from <= to) {
    console.log(from++);
}


// the task 8
let i = 1;
while (i <=13) {
    i += 3;
    console.log(i);
}


// the task 9
let from = 654;
let to = 0;
while (from >= to) {
    console.log(from--);
}


// the task  10
let from = 1983;
let to = 2017;
while (from <= to) {
    console.log(from++);
}


// the task  11
for (let a = (-4), b = 100; a <= b; a += 2) {
    console.log(a);
}


// the task 12
for (let a = 1; a <= 9 ; a++) {
    console.log(a * 7);
}


// the task  15

let sum2 = 0;
for(let v=0; v<=50; v++){
    sum2=sum2+v;
}
console.log(sum2);


// the task 17
let array2=[1,3,4,5];
array2[0] =1;
array2[1] =22;
array2[2]=333;
array2[3] = 4444;
console.log(array2);
}

console.log( sum3);

// the task 18
function arrayFill(a, b) {
    let arr = [];
    for(let i = 0; i < b; i++) {
        arr.push(a);
    }
    return arr;
}
console.log(arrayFill('x', 5));



//  the task 21
let arr = [[1, 2, 3], [4, 5], [6]];
let sum = 0;

for (let i = 0; i < arr.length; i++) {

    for (let j = 0; j < arr[i].length; j++) {
        sum += arr[i][j];
    }
}

console.log(sum);

