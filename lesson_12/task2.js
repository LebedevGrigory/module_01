'use strict';



const recursionFn = (arr) => {
    const randomNum = Math.floor(Math.random() * 11);
    arr.push(randomNum);

    if((arr.reduce((acc, current) => acc + current)) > 50) return arr;

    return recursionFn(arr);
      
}

console.log(recursionFn([1,2,3]));