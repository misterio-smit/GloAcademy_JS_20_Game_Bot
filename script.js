"use strict";

let userNum;
let game = function () {
  //Загадываем число от 0 до 100
  let numBot = (Math.floor(Math.random() * 100) + 1);

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
        game();
      } else if (userNum < numBot) {
        alert('Загаданное число больше');
        game();
      }
    };
    guess();
  };
  start();
};
game();