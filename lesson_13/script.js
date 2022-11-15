
(() => {
    const rock = 'КАМЕНЬ';
    const scissors = 'НОЖНИЦЫ';
    const paper = 'БУМАГА';


    const gameObj = {
        pWin: 'Вы победили',
        сWin: 'Компьютер победил',
        draw: 'Ничья',
        playerResult: 0,
        compResult: 0,
        drawResult: 0,
        table: function () {
            const winnerResul = winner();
            if(winnerResul === this.pWin) {
                return this.playerResult++;
            } else if (winnerResul === this.cWin){
                return this.playerResult++;
            } else if (winnerResul === this.draw) {
                return this.drawResult++;
            } else {
                alert('Ошибка таблицы');
            }         
        }



    };

    const getUserInput = () => {
        let userChoise = prompt('Сделайте выбор: Камень| Ножницы| Бумага|');
        if(userChoise) {
            userChoise = userChoise.toUpperCase();
            if(userChoise === rock || userChoise === paper || userChoise === scissors) {
                return userResult = userChoise;
            } else {
                alert('Уточните свой выбор');
                return getUserInput();    
            };    
        } 

        if (userChoise === ''){
            alert('Ошибка ввода')
            return getUserInput();
        }
            else {
                let question =  confirm('Уже уходите?')
                    if (question === true) {
                    alert (`игрок победил: ${gameObj.playerResult} \n компьютер победил ${gameObj.compResult} \n ничья: ${gameObj.drawResult}`);
                    return start();
                    } else {
                    return getUserInput();
                    };          
        }
        
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
        if (user === computer) return gameObj.draw;

        else if (user === rock && computer === scissors || user === scissors && computer === paper
            || user === paper && computer === rock) {
            return gameObj.pWin;
        } else {
            return gameObj.сWin;
        };
        
    };

    const start = () => {
        const user = getUserInput();
        const computer = computerInput();
        gameObj.table();
        alert(`Вы выбрали: ${user} \n Компьютер выбрал: ${computer} \n результат: ${winner(user, computer)}`);
        let gameQuestion = confirm('Сыграем еще?')
        if (gameQuestion === true) {   
            return start();
        } else {
            return alert (`игрок победил: ${gameObj.playerResult} \n компьютер победил ${gameObj.compResult} \n ничья: ${gameObj.drawResult}`);
            
        }
        
    };

    const game = () => {
        return start();
    }

    window.RPS = game;
    
})();