'use strict';

const rock = 'КАМЕНЬ';
const scissors = 'НОЖНИЦЫ';
const paper = 'БУМАГА';
const draw = 'Ничья';
const playerWin = 'Вы победили';
const computerWin = 'Компьютер победил';
 
const getUserInput = () => {
    let userChoise = prompt('Сделайте выбор: Камень| Ножницы| Бумага|');
    let userResult = null;
    if(userChoise) {
        userChoise = userChoise.toUpperCase();
        if(userChoise === rock || userChoise === paper || userChoise === scissors) {
            userResult = userChoise;
        } else {
             alert('Уточните свой выбор');
             return getUserInput();    
        }
    } else {
       let question =  confirm('Уже уходите?')
            if (question === true) {
                return alert(`Результат игрока:`);
              } else {
                  return getUserInput();
                 };          
    }
    return userResult;
};

const computerInput = () => {
    let computerResult = null;
    const computerChoise = Math.random();

    if (computerChoise < 0.34) {
        computerResult = rock;
    } else if (computerChoise < 0.67) {
        computerResult = scissors;
    } else ( computerResult = paper );

    return computerResult;
};

const winner = (user,computer) => {
    if (user === computer) return draw;

    else if (user === rock && computer === scissors || user === scissors && computer === paper
         || user === paper && computer === rock) {
        return playerWin;
    } else return computerWin;
    
};

const game = () => {
    const user = getUserInput();
    const computer = computerInput();
    alert(`Вы выбрали: ${user} \n Компьютер выбрал: ${computer} \n результат: ${winner(user, computer)}`);
    let gameQuestion = confirm('Сыграем еще?')
    if (gameQuestion === true) {
        return game();
    } else {
        return alert (`игрок победил: ${winTable.playerTable} \n компьютер победил \n ${winTable.computerTable} \n ничья: ${winTable.drawTable}`);
    }
    
};

game();


