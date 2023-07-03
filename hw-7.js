// Задание 1
// let str = `Преобразуйте строку js в верхний регистр JS`;
// console.log(str.toUpperCase())

// Задание 2
// const test = ["Самолет", "самокат", "чай", "сам", "ролики", "конфета "];
// const search = "сам";
// test.forEach((tes) => {
//   if (tes.toLowerCase().startsWith(search.toLowerCase())) {
//     console.log(tes);
//   }
// });

// Задание 3
// 1
// const number = Math.floor(32.58884);
// console.log(number);

// 2
// const number = Math.ceil(32.58884);
// console.log(number);

// 3
// const number = Math.round(32.58884);
// console.log(number);

// Задание 4
// const number = Math.max(52, 53, 49, 77, 21, 32);
// console.log(number);

// const number = Math.min(52, 53, 49, 77, 21, 32);
// console.log(number);

// Задание 5
// function getRandomInt(maxValue) {
//     return Math.round(Math.random()*maxValue)
// }
// console.log(getRandomInt(10));

// Задание 6
// let number = +prompt("Введите число");
// numberToo = Math.floor(number / 2);
// let arr = [];
// let i = 0;

// while (i < numberToo) {
//   arr.push(Math.round(Math.random() * number));
//   i++;
// }
// console.log(arr);
// Задание 7
// function array(first, second) {
//     return Math.floor(Math.random()*(second-first));
// }
// console.log(array(1,10))
// Задание 8
// let currentDate = new Date ();
// console.log(currentDate);

// Задание 9
// var months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];
// var days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница","Суббота"];

// var currentDate = new Date();
// var minSec = currentDate.getTime();
// function now_date(N)
// {
// var day_after_N = new Date(1000 * 60 * 60 * 24 * N);
// var minSecTwo = day_after_N.getTime();

// var minSecThree = new Date(minSec + minSecTwo);
// if (minSecThree > 0) {
//     console.log(`через указанное время будет ${minSecThree}`);
// }
// }
// var user = prompt("Через какое количество дней от 1 до 10000 Вам интересно знать Дату?");
// var n = Math.round(user);
// if (n >= 1 && n <= 365)
// {
// console.log(now_date(n));
// }
// else
// {
// console.log("Вы указали неверное число по запросу")
// }
// var fullDate = " " + minSecThree.getFullYear() + " " + months[minSecThree.getMonth()] + " " + days[minSecThree.getDay()] + " " + minSecThree.getDate();


// Задание 10
// const date = new Date(2014, 11, 31, 12, 30, 0);
// console.log(date.toTimeString());
//   let time = {
//     hour: 'numeric',
//     minute: 'numeric',
//     second: 'numeric'
//   };
//   let options = {
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric',
//   }
//   let weekday = { 
//     weekday: 'long'
//   }
// console.log(date.toLocaleString('ru', options) + ' - ' + 'это ' + date.toLocaleString('ru', weekday));
// console.log(date.toLocaleString('ru', time));