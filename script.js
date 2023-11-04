let options = ["rock", "paper", "scissors"];

function getComputerChoice() {
  // get random index value
  let randomIndex = Math.floor(Math.random() * options.length);
  // get random array item
  let option = options[randomIndex];
  return option;
}

function playerChoice() {
  let validatedInput = false;
  while (validatedInput == false) {
    let playerSelection = window.prompt("Please pick Rock, Paper, or Scissors");
    // if ()
  }
  return playerSelection;
}

playerChoice();

function checkWinner(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "Tie";
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ) {
    return "Player";
  } else {
    return "Computer";
  }
}

function gamePlay(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  let result = checkWinner(playerSelection, computerSelection);
  if (result == "Tie") {
    return "It's a Tie!";
  } else if (result == "Player") {
    return `Congratulations! You win, ${playerSelection} beats ${computerSelection}`;
  } else {
    return `Computer wins, ${computerSelection} beats ${playerSelection}. Try again!`;
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = playerChoice();
    let computerSelection = getComputerChoice();
    console.log(playerSelection, computerSelection);
    console.log(gamePlay(playerSelection, computerSelection));
  }
}

let begin = game();
