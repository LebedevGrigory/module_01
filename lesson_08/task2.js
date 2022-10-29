'use strict';

const newArr = (el, n, m) => 
    Array.from({ length: el }, () => Math.round(Math.random() * (Math.max(n, m) - Math.min(n, m) + 1)) + Math.min(n, m));

console.log(newArr(4, 10, -5));
