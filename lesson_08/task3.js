'use strict';

const strFn = (array, str) => {
    const changeArr = str;
  
    const resultFn = array.filter((num) => {
      if (changeArr === 'odd') {
        return !(num % 2);
      } else if (changeArr === 'even') {
        return num % 2;
      }
    }); 
    return resultFn;
  }


const testArr2 = (length, n, m, str) => {
    const newArr = [];
    const arrLength = length;
    const minNumber = n;
    const maxNumber = m;
    const changeArr = str;
    
    
    
    for ( let i = 0; i < arrLength; i += 1) {
        const workArr = Math.round(Math.random() * (maxNumber - minNumber) + minNumber);
        newArr.push(workArr);
    }
    return strFn(newArr, changeArr);
}

console.log(testArr2(5, -5, 5, 'even'));