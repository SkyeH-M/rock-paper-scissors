function getComputerChoice() {
  let options = ["Rock", "Paper", "Scissors"];
  // get random index value
  let randomIndex = Math.floor(Math.random() * options.length);
  // get random array item
  let option = options[randomIndex];
  return option;
}

// function playerChoice() {
//   let playerSelection = window.prompt("Please pick Rock, Paper, or Scissors");
//   return playerChoice;
// }

// playerChoice();

function gamePlay(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Tie!";
  }
  if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ) {
    return "You win!";
  }
  if (
    (computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "scissors" && playerSelection == "paper") ||
    (computerSelection == "paper" && playerSelection == "rock")
  ) {
    return "Computer wins!";
  }
}

let playerSelection = "Rock";
let computerSelection = getComputerChoice();
console.log(gamePlay(playerSelection, computerSelection));
