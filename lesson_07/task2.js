'use strict';

const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900,370]

const getAverageValue = (numbers) => {
    const sum = numbers.reduce((acc, number) => acc + number, 0);
    const length = numbers.length;
    return Math.floor(sum / length);
  };

console.log(getAverageValue(allCashbox));