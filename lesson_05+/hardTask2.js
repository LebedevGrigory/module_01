'use strick'


const number = (firstNum, secondNum) => {
    
    return (Number(firstNum < secondNum) * firstNum) + (Number(secondNum < firstNum) * secondNum);
};

console.log('Меньшее число: ', number(2,13));