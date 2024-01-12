function getComputerChoice() {
  let num = Math.floor(Math.random() * 3 + 1);
  switch (num) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
    default:
      return `Error: Output was ${num}`;
  }
}
function gameRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection == "paper") {
    computerScore++;
    console.log("Computer Wins");
    showWinner.textContent = "Computer wins!"

  }

  else if (playerSelection === "paper" && computerSelection == "scissors") {
    computerScore++;
    console.log("Computer Wins");
    showWinner.textContent = "Computer wins!"
  }

  else if (playerSelection === "scissors" && computerSelection == "rock") {
    computerScore++;
    console.log("Computer Wins");
    showWinner.textContent = "Computer wins!"
  }

  else if (playerSelection === computerSelection) {
    console.log("It's a tie!")
    showWinner.textContent = "It's a tie!"
  }
  else {
    playerScore++;
    console.log("Player Wins");
    showWinner.textContent = "You win!!!"
  }

  playerSpan.textContent = playerSelection;
  computerSpan.textContent = computer;
  displayRound();
}

function displayRound(input) {
  if (input === 'reset') {
    playerSpan.textContent = "reset";
    computerSpan.textContent = "nothing";
    showWinner.textContent = "Score reset.";
  }

  // Set the text content of showChoices
  showChoices.textContent = 'You chose ';
  // Append the new span elements to showChoices
  showChoices.appendChild(playerSpan);
  showChoices.appendChild(document.createTextNode(' and computer chose: '));
  showChoices.appendChild(computerSpan);
  showChoices.appendChild(document.createTextNode('.'));
  //change score
  showScore.textContent = "Your score is: ";
  showScore.appendChild(document.createTextNode(playerScore));
  showScore.appendChild(document.createTextNode(' and the computer\'s score is: '));
  showScore.appendChild(document.createTextNode(computerScore));
  showScore.appendChild(document.createTextNode("."));
}
let playerScore = 0;
let computerScore = 0;
const showChoices = document.querySelector('.choice');
const showWinner = document.querySelector('#winner');
const showScore = document.querySelector('#score');
const choices = document.querySelectorAll('.panel');
const playerSpan = document.createElement('span');
const computerSpan = document.createElement('span');
let playerSelection;
let computer;
choices.forEach((option) => {
  option.addEventListener('click', () => {
    playerSelection = option.id;
    computer = getComputerChoice();
    gameRound(playerSelection, computer);
  });
});

const resetButton = document.querySelector('.reset');
resetButton.addEventListener('click', () => {
  playerScore = 0;
  computerScore = 0;
  displayRound('reset');
});
