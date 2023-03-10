    //establishing variables to select html content to manipulate, and even create html content via javaScript (p)//
    const rockButton = document.querySelector('.rock');
    const paperButton = document.querySelector('.paper');
    const scissorsButton = document.querySelector('.scissors');
    const resultDiv = document.querySelector('.result');
    const winnerDiv = document.querySelector('.winner');
    const playerScoreSpan = document.querySelector('.player-score');
    const compScoreSpan = document.querySelector('.comp-score');
    const p = document.createElement('p');
    const h1 = document.createElement('h1');
    const resetGame = document.querySelector('.resetGame');
    


    let playerScore = 0;
    let compScore = 0;

    function getComputerChoice() {
        let randomValue = Math.floor(Math.random()*3); //random value range 0-3//

        if (randomValue === 0) {
            return 'rock';
        } else if (randomValue === 1) {
            return 'paper'; 
        } else {
            return 'scissors';
        }
    }


    //Takes user input, converts to lowercase viable input otherwise asks again for a valid input)//
    function playerSelection(userInput) {
        if (userInput.toLowerCase() === 'rock') {
            return userInput;
        } else if (userInput.toLowerCase() === 'paper') {
            return userInput;
        } else if (userInput.toLowerCase() === 'scissors') {
            return userInput;
        } else {console.log('That is not a valid option.')}
    };


    //User input is compared to randomly selected computerSelection to determine who wins the round. +1 is added to
    //whoever the winner of the round, that being playerScore or compScore. is. A console log is also returned presenting the result in
    //the players pov

    //return has been replaced with creating element p, and appending the result into resultDiv//
    function playRound(playerSelection, computerSelection) {
        switch (playerSelection) {
            case 'rock':
                if (computerSelection == 'rock') {
                    p.innerText = 'Draw!';
                    resultDiv.appendChild(p);
                } else if (computerSelection == 'paper') {
                    compScore++;
                    p.innerText = 'You lose! Paper beats rock';
                    resultDiv.appendChild(p);
                } else {
                    playerScore++;
                    p.innerText = 'You win! Rock beats Scissors';
                    resultDiv.appendChild(p);
                }
                break;
            case 'paper':
                if (computerSelection == 'paper') {
                    p.innerText = 'Draw!';
                    resultDiv.appendChild(p);
                } else if (computerSelection == 'scissors') {
                    compScore++;
                    p.innerText = 'You lose! Scissors beats Paper';
                    resultDiv.appendChild(p);
                } else {
                    playerScore++;
                    p.innerText = 'You win! Paper beats Rock';
                    resultDiv.appendChild(p);
                }
                break;
            case 'scissors':
                if (computerSelection == 'scissors') {
                    p.innerText = 'Draw!';
                    resultDiv.appendChild(p);
                } else if (computerSelection == 'rock') {
                    compScore++;
                    p.innerText = 'You lose! Rock beats Scissors';
                    resultDiv.appendChild(p);
                } else {
                    playerScore++;
                    p.innerText = 'You win! Scissors beats Paper';
                    resultDiv.appendChild(p);
                }
                break;
        }
    }

    //function placed in checkForWinner function to end game after whoever gets 5. Buttons stop working//
    function endGame() {
        document.querySelector('.rock').disabled = true;
        document.querySelector('.paper').disabled = true;
        document.querySelector('.scissors').disabled = true;
    }

    //when score reaches 5 for either player, or computer element h1 is created, and text for winner is appended into winnerDiv, and endGame function is used//
    const checkForWinner = (playerScore, compScore) => {
        if (playerScore === 5) {
            h1.innerText = 'You beat the computer, well done!'
            winnerDiv.appendChild(h1);
            endGame();
        } else if (compScore === 5) {
            h1.innerText = 'You lost to the computer, bad luck!'
            winnerDiv.appendChild(h1);
            endGame();
        }
    }

    //score count updated//
    const updateScores = (playerScore, compScore) => {
        playerScoreSpan.innerText = `Player Score:  ${playerScore}`;
        compScoreSpan.innerText = `Computer Score:  ${compScore}`;
    }


    rockButton.addEventListener('click', () => {
      const computerSelection = getComputerChoice() //gets computer selection when player selects rock//
      const playerSelection = 'rock' //player selection, this case player clicked button rock//
      playRound(playerSelection, computerSelection);
      updateScores(playerScore, compScore);
      checkForWinner(playerScore, compScore);
    })

    paperButton.addEventListener('click', () => {
      const computerSelection = getComputerChoice() //gets computer selection when player selects paper//
      const playerSelection = 'paper' //player selection, this case player clicked button paper//
      playRound(playerSelection, computerSelection);
      updateScores(playerScore, compScore);
      checkForWinner(playerScore, compScore);
    })

    scissorsButton.addEventListener('click', () => {
      const computerSelection = getComputerChoice() //gets computer selection when player selects scissors//
      const playerSelection = 'scissors' //player selection, this case player clicked button scissors//
      playRound(playerSelection, computerSelection);
      updateScores(playerScore, compScore);
      checkForWinner(playerScore, compScore);
    })


    //reset button to refresh page/reset game//
    resetGame.addEventListener('click', () => {
        location.reload();
    })

    //Making use of the other established functions, the game function uses a for loop that makes it so the functions are repeated
    //5 times. This function prompts for //userInput//, takes the generated computer selection and plays the rounds.
    //A console log is also returned each round updating the score
    //After the for loop is done, the winner, or a tie is returned finally
    /* function game() {
            for (let i = 0; i < 5; i++) {
            let playerSelection = prompt('Please type in your selection', 'Rock, Paper, Scissors').toLowerCase();
            let computerSelection = getComputerChoice();
            playRound(playerSelection, computerSelection);
           
        } 

        if (playerScore > compScore) {
            return 'You beat the Computer! Well Done!';
        } else if (playerScore < compScore) {
            return 'You lost to the Computer! Bad luck!';
        } else {
            return 'It is a tie!';
        }
    }

    */