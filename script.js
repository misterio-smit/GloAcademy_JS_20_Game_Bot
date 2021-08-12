"use strict";

let userNum;

//Загадываем число от 0 до 100
let numBot = (Math.floor(Math.random() * 100) + 1);
console.log(numBot);

let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

//Получаем число от пользователя
let start = function () {

  userNum = +prompt('Угадай число от 1 до 100');

  while (!isNumber(userNum)) {

    userNum = +prompt('Введи число!');
  }
  if (userNum === 0) {
    alert('Игра окончена!');
    return;
  }
  let guess = function () {

    if (userNum === numBot) {
      alert('Поздравляю, Вы угадали!!!');
      return;
    } else if (userNum > numBot) {
      alert('Загаданное число меньше');
      return start();
    } else if (userNum < numBot) {
      alert('Загаданное число больше');
      return start();
    }
  };
  console.log(userNum);
  guess();
};

start();