// задание 1

// Задание 2
// function isPositive(number) {
//   if (number > 0) {
//     return number;
//   }
// }
// function isMale(whoIS) {
//   if (whoIS.gender == "male") {
//     return whoIS;
//   }
// }
// function filter(arr, ruleFunction) {
//   for (let i = 0; i < arr.length; i++) {
//     return arr.filter(ruleFunction);
//   }
// }
// console.log(filter([3, -4, 1, 9], isPositive));
// const people2 = [
//   { name: "Глеб", gender: "male" },
//   { name: "Анна", gender: "female" },
//   { name: "Олег", gender: "male" },
//   { name: "Оксана", gender: "female" },
// ];
// console.log(filter(people2, isMale));

// Задание 3
// const timer = (deadline) => {
//   const interval = setInterval(() => {
//     let currentDate = new Date();
//     console.log(currentDate);
//   }, 3000);

//   setTimeout(() => {
//     clearInterval(interval);
//     console.log("30 секунд прошло");
//   }, deadline * 1000);
// };

// timer(30);

// Задание 4

// Задание 5
// function delayForSecond(cb) {
//   setTimeout(() => {
//     console.log("Прошла одна секунда");
//     if (cb) {
//       cb();
//     }
//   }, 1000);
// }

// function sayHi(name) {
//   console.log(`Привет, ${name}!`);
// }
// setTimeout(() => {
//   sayHi("Глеб");
// }, 2000);
// delayForSecond();
