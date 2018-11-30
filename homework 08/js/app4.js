'use strict';

let login = prompt ('Введите логин');
let password = prompt ('Введите пароль');

if ((login == 'ivan') && (password == '334455')) {
    alert ('Добро пожаловать!');
} 
else if ((login == 'alex') && (password == '777')) {
    alert ('Добро пожаловать!');
}
else if ((login == 'petr') && (password == 'b5678')) {
    alert ('Добро пожаловать!');
}
else {
    alert ('Ошибка входа!')
}

