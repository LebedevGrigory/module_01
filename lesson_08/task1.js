'use strict';

const testArr = (length) => {
    const newArr = [];
    const arrLength = length;
    
    

    for ( let i = 0; i < arrLength; i += 1) {
        const workArr = Math.round(Math.random() * 100)
        newArr.push(workArr);
    }
    return newArr
}

console.log(testArr(20))

