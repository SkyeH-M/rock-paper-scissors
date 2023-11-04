let options = ["rock", "paper", "scissors"];
let computerWins = [];
let playerWins = [];

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
    let choice = prompt("Please pick Rock, Paper, or Scissors");
    if (choice == null) {
      console.log("Please only enter 'paper', 'rock', or 'scissors'");
      continue;
    }
    let lowerChoice = choice.toLowerCase();
    if (options.includes(lowerChoice)) {
      validatedInput = true;
      return lowerChoice;
    }
  }
}

// playerChoice();

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
  //   playerSelection = playerSelection.toLowerCase();
  let result = checkWinner(playerSelection, computerSelection);
  if (result == "Tie") {
    computerWins++;
    playerWins++;
    return "It's a Tie!";
  } else if (result == "Player") {
    playerWins++;
    return `Congratulations! You win, ${playerSelection} beats ${computerSelection}`;
  } else {
    computerWins++;
    return `Computer wins, ${computerSelection} beats ${playerSelection}. Try again!`;
  }
}

function announceWinner(playerWins, computerWins) {
  if (playerWins > computerWins) {
    return `Congratulations! You won with ${playerWins} points, while the computer scored ${computerWins}`;
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = playerChoice();
    let computerSelection = getComputerChoice();
    console.log(playerSelection, computerSelection);
    console.log(gamePlay(playerSelection, computerSelection));
    console.log(`Player: ${playerWins}`);
    console.log(`COmputer: ${computerWins}`);
  }
  console.log(announceWinner());
}

let begin = game();
