function riddles() {
  let userAnswer = prompt(
    `Сидит дед во сто шуб одет кто его раздевает тот слез проливает`
  );

  if (userAnswer === `лук`) {
    alert("угадал");
  } else alert("не угадал");
  let humanAnswer = prompt(`Зимой и летом одним цветом`);
  if (humanAnswer === `елка`) {
    alert(`угадал`);
  } else {
    alert(`Не угадал`);
  }
}

// // задание 1
// function refund(a, b) {
//   if (a >= b) {
//     console.log(b);
//   } else {
//     console.log(a);
//   }
// }

// refund(4, 6);
// refund(6, 8);
// refund(6, 6);

// // задание 2
// function number(a) {
//   if (a % 2 === 0) {
//     console.log(`Число четное ${a}`);
//   } else {
//     console.log(`Число нечетное ${a}`);
//   }
// }
// number(4);
// number(3);

// // Задание 3.1
// function double(b) {
//   console.log(b ** 2);
// }

// double(4);

// // Задание 3.2
// function double(a) {
//   const b = a ** 2;
//   return b;
// }

// double(4);

// // задание 4
// const age = prompt(`Сколько вам лет?`);
// if (age < 0) {
// console.log(`Вы ввели неправильное значение`);
// } else if (age <= 12) {
// console.log(`Привет, Друг!`);
// } else {
// console.log(`Добро пожаловать!`);
// }

//  задание 5
// function numb(a, b) {
//   if (isNaN(a) || isNaN(b)) {
//     console.log(`Одно или оба значения не являются числом`);
//   } else {
//     console.log(a*b);
//   }
// }
// numb(5, 8);
// numb(10, `dsa`)

// Задание 6

// let cube = (number) => {
//     if (isNaN(number)===false){
//         let result = number**3;
//         return(`${number} в кубе равнается ${result}`)
//     } else {
//         return('Переданный параметр не является числом')
//     }
// }
// console.log(cube(0));
// console.log(cube(1));
// console.log(cube(2));
// console.log(cube(3));
// console.log(cube(4));
// console.log(cube(5));
// console.log(cube(6));
// console.log(cube(7));
// console.log(cube(8));
// console.log(cube(9));
// console.log(cube(10));
// console.log(cube('dwdw'));

// Задание 7
// const circle1 = {
//     radius: 5,
//     getArea() {
//       return Math.PI * this.radius ** 2;
//     },
//     getPerimeter() {
//       return 2 * Math.PI * this.radius;
//     }
//   };
  
//   const circle2 = {
//     radius: 20,
//     getArea() {
//       return Math.PI * this.radius ** 2;
//     },
//     getPerimeter() {
//       return 2 * Math.PI * this.radius;
//     }
//   };

// задание 8
// function season(monthNumber) {
//   if (!isNaN(monthNumber) && monthNumber >= 0 && monthNumber <= 12) {
//     if ((monthNumber >= 1 && monthNumber <= 2) || monthNumber === 12) {
//       return console.log("Зима");
//     } else if (monthNumber >= 3 && monthNumber <= 5) {
//       return console.log("Весна");
//     } else if (monthNumber >= 6 && monthNumber <= 8) {
//       return console.log("Лето");
//     } else if (monthNumber >= 9 && monthNumber <= 11) {
//       return console.log("Осень");
//     }
//   } else {
//     return console.log("Такого месяца не существует");
//   }
// }
// season(9)
