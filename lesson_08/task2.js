'use strict';

const testArr2 = (length, n, m) => {
    const newArr = [];
    const arrLength = length;
    const minNumber = n;
    const maxNumber = m;
    
    
    for ( let i = 0; i < arrLength; i += 1) {
        const workArr = Math.round(Math.random() * (m - n) + n);
        newArr.push(workArr);
    }
    return newArr;
}

console.log(testArr2(5, -5, 5));