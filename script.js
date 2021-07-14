"use strict";
// Типы переменных
// let number = 4.6;

// console.log(-4/0);
// console.log('string' * 9);

// const person = 'Alex';

// const bool = true;

// // console.log(something);

// let und;
// console.log(und);

// const obj = {
//     name: "John",
//     age: 25,
//     isMarried: false
// };

// // console.log(obj.name);
// console.log(obj["name"]);

// let arr = ['plum.png', 'orange.jpg',  'apple.bmp'];
// console.log(arr[1]);



// Простейшии функции в бразуере

// alert('Hello world'); //Всплывающее окно

// const result = confirm("Are you here?"); // Получаем ответ true or false
// console.log(result);

// const answer = prompt("Вам есть 18 лет?", ""); //получаем строку string
// console.log(answer);


// const answers = [];
// answers[0] = prompt("Как ваше имя?", "");
// answers[1] = prompt("Как ваша фамилия?", "");
// answers[2] = prompt("Сколько вам лет?", "");
// document.write(answers); // получаем массив ответов пользователя, тип object

// интерполяция

// const category = 'toys';
// // console.log('https://someurl.com/' + category); // старый формат записи
// console.log(`https://someurl.com/${category}/5`); // интерполяция

// const user = 'Ivan';
// alert(`Привет, ${user}`);

// операторы в js

console.log('arr' + ' - object');
console.log(5 + ' - object'); // конкатенация строк - всегда получается string

let incr = 10,
    decr = 10;

incr++; // постфиксная запись
decr--;

// ++incr; // префиксная запись
// --decr;

console.log(incr); //оператор инкремента, увеличивает на 1
console.log(decr); //оператор декремента, уменьшает на 1

console.log(5%2); // оператор остаток от деления

const a = 10; // оператор присваивания = 
console.log(a);

console.log(4 * 2 == '8'); //  оператор сравнения == не строгое равенство, сраванивает тип, строка '8' становится числом 8
console.log(4 * 2 === '8'); // оператор сравнения === строгое равенство

// const isChecked = true;
// const isClose = true;
// console.log(isChecked && isClose); //опреатор И возвращает true, если оба true

// const isChecked = true;
// const isClose = false;
// console.log(isChecked || isClose); // опреатора ИЛИ возвращает true, если хотя бы один true

const isChecked = false;
const isClose = false;
console.log(isChecked || !isClose); // оператор отрицания !, возвращает обратное значение, выражение вернет true



