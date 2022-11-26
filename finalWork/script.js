'use strict';

(() => {

const gameObj = {
    playerCount: 5,
    computerCount: 5,
    gameError: 'Неверная ставка!',
    playerWin: 'Победил игрок',
    compWin: 'Победил компьютер',

    get finalScore() {
        alert (`РЕЗУЛЬТАТ ИГРЫ: \n игрок: ${this.playerCount} \n компьютер: ${this.computerCount}`);
        return;
      },
};  

//ставка компа
const compGuess = () => {
    let compEvenOdd = Math.round(Math.random());
    return compEvenOdd;    
}

const game = () => {
    let playerCount = 5;
    let computerCount = 5;

    const playObj = gameObj;

    return function play () {
        let player = prompt('Загадайте колличество шариков');
        let playerChoise = +player;
        let computerChoise = compGuess();

        if (playerChoise > gameObj.playerCount || isNaN(playerChoise) || playerChoise === ''){
             alert(`${playObj.gameError}`);
             return play();    
        };

        if(playerChoise === 0) {
            let question = confirm ('Уже уходите?');
            if(question === true){
              alert('До новых встреч!');  
              return;
            } else {
              return play();
            }  
          };


        if (playerChoise > playObj.computerCount) {
            alert('Невозможно сделать ставку, у компьютера нет столько шариков')
            return play();
        }
   
        if ((playerChoise % 2 === 0)  && computerChoise === 0 || playerChoise % 2 !== 0 && computerChoise === 1 ) {
            playerCount -= playerChoise;
            computerCount += playerChoise;
            playObj.computerCount = computerCount;
            playObj.playerCount = playerCount;
                if(computerChoise === 0) {
                    computerChoise = 'Четное число';
                    } else {
                    computerChoise = 'Нечетное число';
                    };
            alert(`игрок загадал: ${playerChoise} \n компьютер загадал: ${computerChoise} \n ${playObj.compWin}`);
            playObj.finalScore;
            if(computerCount === 10) {
                alert(`КОМПЬЮТЕР ПОБЕДИЛ`);
                return;
            };                     
            } else {
                computerCount -= playerChoise;
                playerCount += playerChoise;
                playObj.playerCount = playerCount;
                playObj.computerCount = computerCount;
                    if(computerChoise === 0) {
                        computerChoise = 'Четное число';
                    } else {
                        computerChoise = 'Нечетное число';
                        }
                alert(`игрок загадал: ${playerChoise} \n компьютер загадал: ${computerChoise} \n ${playObj.playerWin}`);
                playObj.finalScore;  
                 if(playerCount === 10){
                    alert(`ИГРОК ПОБЕДИЛ`);
                        return;
                    };   
                };   
            return play();
                
    };

};

window.MARBL = game;


})();