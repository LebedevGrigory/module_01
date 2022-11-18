'use strict';

(() => {
  const figures = ['камень', 'ножницы', 'бумага'];

  
  const computerInput = () => {
      let computerResult = null;

      const computerChoise = Math.random();

      if (computerChoise < 0.34) {
          computerResult = 'камень';
      } else if (computerChoise < 0.67) {
          computerResult = 'ножницы';
      } else ( computerResult = 'бумага');

      return computerResult;
  };
  
  const gameObj = {
    playerScore:0,
    computerScore:0,

    get finalScore() {
      alert (`РЕЗУЛЬТАТ ИГРЫ: \n игрок: ${this.playerScore} \n компьютер: ${this.computerScore}`);
      return;
    },
  };

    const game = () => {
    const results = {
      computerScore: 0,
      playerScore: 0,
    };

    return function play() {
      const playerFigure = prompt('камень, ножницы, бумага');
      const computerFigure = computerInput();
      const playObj = gameObj;
      
      if(playerFigure !== figures[0] && playerFigure !== figures[1] && playerFigure !== figures[2]){
        alert('Введите корректное значение!');
        return play();
      }



      if(playerFigure === null) {
        let question = confirm ('Уже уходите?');
        if(question === true){
          playObj.finalScore;
          return;
        } else {
          return play();
        }  
      };
      if (playerFigure === figures[0] && computerFigure === figures[1] ||
         playerFigure === figures[1] && computerFigure === figures[2] ||
         playerFigure === figures[2] && computerFigure === figures[0]) {
          alert(`Вы выбрали: ${playerFigure} \n Компьютер выбрал: ${computerFigure} \n Вы выйграли!`);
          results.playerScore++;
          playObj.playerScore = results.playerScore;
          let more = confirm('Сыграем еще?');
            if(more === true) {
              return play();
            } else {
              playObj.finalScore;
              return;
            };
        
          } else if (playerFigure === computerFigure) {
          alert(`Вы выбрали: ${playerFigure} \n Компьютер выбрал: ${computerFigure} \n Ничья!`);
          let more = confirm('Сыграем еще?');
            if(more === true) {
              return play();
            } else {
              playObj.finalScore;
              return;
            } 
         } else {
          alert(`Вы выбрали: ${playerFigure} \n Компьютер выбрал: ${computerFigure} \n Вы проиграли!`);
          results.computerScore++; 
          playObj.computerScore = results.computerScore;
          let more = confirm('Сыграем еще?');
            if(more === true) {
              return play();
              } else {
                playObj.finalScore;
                return;
          };
         }
      };

    };
   

  window.RPS = game;
  
})();