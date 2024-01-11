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
  if (playerSelection === "rock" && computerSelection == "paper")
    console.log("Computer Wins");
  else if (playerSelection === "paper" && computerSelection == "scissors")
    console.log("Computer Wins");
  else if (playerSelection === "scissors" && computerSelection == "rock")
    console.log("Computer Wins");
  else if (playerSelection === computerSelection) console.log("It's a tie!");
  else console.log("Player Wins");
}
function getSelection() {
  let playerSelection;
  while (
    playerSelection != "rock" &&
    playerSelection != "paper" &&
    playerSelection != "scissors"
  ) {
    playerSelection = prompt("What do you choose?").toLowerCase().trim();
  }
  return playerSelection;
}

function game() {
  for (let i = 0; i < 5; i++) {
    let player = getSelection();
    let computer = getComputerChoice();
    console.log(`Player: ${player}, Computer: ${computer}`);
    gameRound(player, computer);
  }
}
game();
