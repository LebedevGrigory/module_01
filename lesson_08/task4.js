'use strict';
const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];

const changeArr = arr.filter(function (el) {
    return !(el % 2 === 0);
}
    
);
console.log(changeArr)