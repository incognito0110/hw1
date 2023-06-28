// задание 1
// const numbs = [1, 5, 4, 10, 0, 3];
// for (let i = 0; i < numbs.length; i++) {
// 	if (numbs[i] === 0) break;
// 	console.log(numbs[i]);
// }

// Задание 2

// const number = [1, 5, 4, 10, 0, 3];
// const result = number.indexOf(4)
// console.log(result);

// задание 3
// const num = [1, 3, 5, 10, 20];
// console.log(num.join(' '));

// задание 4
const number = [[1, 1, 1][(1, 1, 1)][(1, 1, 1)]];
for (let numberIn of number) {
  for (let element of numberIn) {
    console.log(element);
  }
}

// Задание 5
// const number = [1, 1, 1];
// number.push(2, 2, 2);
// console.log(number);

// Задание 6
// const numbers = [9, 8, 7, 'a', 6, 5];
// const index = 3;
// numbers.splice(index, 1)
// console.log(numbers.sort());

// задание 7
// const numb = [9, 8, 7, 6, 5];
// let question = +prompt("Угадай");
// for (let item of numb) {
//   if (item === question || item === numb) {
//     alert("Угадал");
//     break;
//   } else {
//     alert("Не угадал");
//     break;
//   }
// }

// задание 8
// let text = 'abcdef';
// let reverse = text.split('').reverse().join('');
// console.log(reverse);

// задание 9
// const num = [[1, 2, 3,],[4, 5, 6]]
// console.log(num.flat());

// задание 10
// const array = [9, 8, 7, 6, 5];
// for (let x = 0; x < array.length - 1; x++) {
//   let sum = array[x] + array[x + 1];
//   console.log(sum);
// }

// Задание 11
// const array = [14, 2, 33, 41];
// const quadra = array.map(x => [x * 2])
// console.log(quadra);

// Задание 12
// function lengthSrt(array) {
//     return array.map (el => {
//         console.log(el.length);
//     });
// }
// lengthSrt(['день', '', 'на', 'Прекрасно прогулялись сегодня', 'и']);

// Задание 13
// const filterPositive = (array) => array.filter(el => el < 0);
// console.log(filterPositive([-12,10,5,-6,56]));