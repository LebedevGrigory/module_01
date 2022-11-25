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
       
        if (playerChoise === 0 || playerChoise > gameObj.playerCount || isNaN(playerChoise) || playerChoise === ''){
             alert(`${playObj.gameError}`);
             return play();    
        };

        if (playerChoise > playObj.computerCount) {
            alert('Невозможно сделать ставку, у компьютера нет столько шариков')
            return play();
        }
   
        if ((playerChoise % 2 === 0)  && computerChoise === 0 ){
            playerCount -= playerChoise;
            computerCount += playerChoise;
            playObj.computerCount = computerCount;
            playObj.playerCount = playerCount;
            alert(`игрок загадал: ${playerChoise} \n компьютер загадал: четное число 
            \n ${playObj.compWin}`);
                if(computerCount === 10){
                    alert(`КОМПЬЮТЕР ПОБЕДИЛ`);
                    return;
                } else {
                    alert(`${playObj.finalScore}`);
                    return play();
                };

        } else if (playerChoise % 2 === 0 && computerChoise === 1){
            computerCount -= playerChoise;
            playerCount += playerChoise;
            playObj.playerCount = playerCount;
            playObj.computerCount = computerCount;
            alert(`игрок загадал: ${playerChoise} \n компьютер загадал: нечетное число 
            \n ${playObj.playerWin}`);
                if(playerCount === 10){
                    alert(`ИГРОК ПОБЕДИЛ`);
                    return;
                } else {
                    alert(`${playObj.finalScore}`);   
                    return play();
                };
            

        } else if (playerChoise % 2 !== 0 && computerChoise === 0) {
            computerCount -= playerChoise;
            playerCount += playerChoise;
            playObj.playerCount = playerCount;
            playObj.computerCount = computerCount;
            let question = confirm('')
            alert(`игрок загадал: ${playerChoise} \n компьютер загадал: четное число 
            \n ${playObj.playerWin}`);
                if(playerCount === 10){
                    alert(`ИГРОК ПОБЕДИЛ`);
                    return;
                } else {
                    alert(`${playObj.finalScore}`);
                    return play();
                };

        } else if ( playerChoise % 2 !== 0 && computerChoise === 1) {
            playerCount -= playerChoise;
            computerCount += playerChoise;
            playObj.computerCount = computerCount;
            playObj.playerCount = playerCount;
            alert(`игрок загадал: ${playerChoise} \n компьютер загадал: нечетное число 
            \n ${playObj.compWin}`);
                if(computerCount === 10){
                    alert(`КОМПЬЮТЕР ПОБЕДИЛ`);
                    return;
                } else {
                    alert(`${playObj.finalScore}`);
                    return play();
                };
            };       
    };

};

window.MARBL = game;


})();