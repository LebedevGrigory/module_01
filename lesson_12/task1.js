'use strict';

const randomNumber = parseInt(Math.random() * 100);

const isNum = (num) => {
  return !isNaN(parseFloat(num)) && isFinite(num)
};

const randomBot = () => {
  let userNum = prompt('Введите число');
  if (isNum(userNum)) {
    userNum = +userNum;

    if (userNum > randomNumber) {
      alert('Cлишком много!');
    } else if (userNum < randomNumber) {
      alert('Слишком мало!');
    } else if (userNum === randomNumber) {
      alert('Вы угадали!');
      return userNum;
    }
  } else {
    alert('Можно вводить только числа!');
  }
  return randomBot();
};

console.log(randomBot());