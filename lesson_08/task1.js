'use strict';

const arrStart = [1,2,3];

const newArr = arrStart.map((el) => (Math.round(Math.random(el) * 100)) + 1);

console.log(newArr);