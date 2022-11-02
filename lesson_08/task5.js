'use strict'

const randomNumber = () => {
    return Math.ceil(Math.random() * (100-1))+1;
}


const randomBot = () => {
    const number = randomNumber();
    while(true) {
        let userNumber = prompt('Введите число')
        if (userNumber === '' || isNaN(userNumber)) {
            alert('Введите число!');
            continue}    

        if(userNumber === number) {
            alert('Вы угадали')
            break;
        }
        if(userNumber === null) {
            alert('Уже уходите?')
            break;
    
        }      
        else if (userNumber < number) {
            alert('Слишком мало')
        }
        else if (userNumber > number) {
            alert('Cлишком много')
        }
        
    }  
    alert('До свидание!')
}

console.log(randomBot());