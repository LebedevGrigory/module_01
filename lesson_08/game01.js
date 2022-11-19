'use strict';

let randomNum = parseInt(Math.random()* 100);


const game = () => {
    const userNum = prompt('Введтие число');

    if(isNaN(userNum)){
        alert('Введите число!');
        game();
        if(userNum === null) {
            alert('До свидания!');
            return;
        } else {
            return game();
        }
    };
    
    if (userNum === randomNum) {
        alert('Вы угадали!')
        return;
    } else if (userNum < randomNum) {
        alert('Меньше!');
        let question = confirm('Попробуем еще?')
        if(question === true) {
            return game();
        } else {
            alert('До свидания!');
            return;
        }
    } else if ( userNum > randomNum) {
        alert('Больше!')
        let question = confirm('Попробуем еще?')
        if(question === true) {
            return game();
        } else {
            alert('До свидания!');
            return;
        };
    }
    if(userNum === null) {
        alert('До свидания!');
        return;
    } else {
        return game();
    }
    
};

game();