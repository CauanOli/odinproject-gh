const gameBoard = ( function () {
  const gameBoardCell = document.querySelectorAll('p');
  const titleBarTitle = document.querySelector('.titlebar--title');
  const titleBar = document.querySelector('.titlebar');
  const body = document.querySelector('body');

  const playerOneTitle = document.querySelector('.titlebar--playerOne');
  const playerTwoTitle = document.querySelector('.titlebar--playerTwo');
  

  let gameboard = ['','','','','','','','',''];
  let player;
  let adversary;
  let playerTurn;


  const gameFlow = (() => {
    const overlay = document.querySelector('#overlay');
    const startModal = document.querySelector('.start');
    const placar = document.querySelector('.placar');

    const toggleModal = (modal) => {
      modal.classList.toggle('active');
      overlay.classList.toggle('active');
    }

    placar.addEventListener('click', () => {
      toggleModal(placar);
      toggleModal(startModal);
    });

    const startGame = (() => {
      const startButton = document.querySelector('.start--button');
      const playerOne = document.querySelector('#playerOne');
      const playerTwo = document.querySelector('#playerTwo');
      
      const definePlayers = () => {
        player = Player(playerOne.value, 'X', 0);
        adversary = Player(playerTwo.value, 'O', 0);
        playerTurn = player;
        playerOneTitle.textContent = "X";
        playerTwoTitle.textContent = "O";
      }

      startButton.addEventListener('click', () => {
        if (playerOne.value && playerTwo.value && (playerTwo.value != playerOne.value)) {
          definePlayers();
          toggleModal(startModal);
        } else {
          (playerOne.value) ? playerTwo.placeholder = "ENTER A NAME" : playerOne.placeholder = "ENTER A NAME";
          alert("The players can't have the same name.")
        }
      });
    })();
    
    const finishGame = (winner) => {
      const playerOnePoints = document.querySelector('.playerOne-points')
      const playerTwoPoints = document.querySelector('.playerTwo-points')
      const winnerCongrats = document.querySelector('.winner-congrats');

      if (player.points >= 3 | adversary.points >= 3) {
        playerOnePoints.textContent = `${(player.name).toUpperCase()}: ${player.points}`;
        playerTwoPoints.textContent = `${(adversary.name).toUpperCase()}: ${adversary.points}`;
        (player.points > adversary.points) ? winner = player : winner = adversary;
        winnerCongrats.textContent = `Congratulations ${winner.name}, you won!`;
        toggleModal(placar);
      }
      
      winner = '';
      gameboard = ['','','','','','','','',''];
      render();
    };

    return {finishGame};
  })();
  
  // Add event listeners
  gameBoardCell.forEach((cell) => {
    cell.addEventListener('click', () => play(cell));
  });
  
  // Render the gameBoard
  const render = () => {
    let i = 0;
    gameBoardCell.forEach((cell) => {
      cell.textContent = gameboard[i];
      cell.classList.add('empty');
      i++;
    });
  }
  
  // Plays and verifies the board for a win
  const play = (cell) => {
    let titleBarImage = document.querySelector('.titlebar--image');
    if (!cell.textContent) {
      cell.classList.toggle('empty');
      cell.textContent = playerTurn.symbol;
      gameboard[cell.classList[0]] = playerTurn.symbol;
        
      (playerTurn.name == player.name) ? playerTurn = adversary : playerTurn = player;
      checkBoard(player, adversary);
    }
    if (titleBarImage) { titleBar.removeChild(titleBarImage)};
    titleBarTitle.textContent = `${playerTurn.symbol}`;
  }

  // Check the board for a win pattern
  const checkBoard = (player, adversary) => {
    let winner;
    let verify = (size, step, comparison, start=0) => {
      for (let i = start; i <= size; i += step) {
        if (gameboard[i]) {
          if (gameboard[i] == gameboard[i+comparison] & gameboard[i] == gameboard[i+comparison*2]) {
            (player.symbol == gameboard[i]) ? winner = player : winner = adversary;
          }
        }
      }
    }

    const verifyColumn = () => verify(8, 1, 3);
    const verifyRow = () => verify(3, 3, 1);
    const verifyDiagonal = () => {
      verify(0, 1, 4);
      verify(2, 1, 2, start = 2);
    }
    
    const verifyWin = () => {
      verifyColumn();
      verifyRow();
      verifyDiagonal();
      if (!gameboard.includes('') & !winner ) {
        gameFlow.finishGame('tie');
      }
      if (winner) {
        winner.points++;
        playerOneTitle.textContent = `${player.points}`;
        playerTwoTitle.textContent = `${adversary.points}`;
        body.classList.toggle('win');
        gameFlow.finishGame(winner);
      }
    }
    
    verifyWin();
  }
  

  // Create a player
  function Player(name, symbol, points) {
    return {name, symbol, points}
  }

  render();
})();