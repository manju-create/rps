function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getHumanChoice() {
  const userInput = prompt("Enter rock, paper, or scissors:").toLowerCase();
  return userInput;
}

let humanScore = 0;
let computerScore = 0;

console.log("Starting Scores → Human:", humanScore, "Computer:", computerScore);

function playRound() {
  const humanChoice = getHumanChoice();
  const computerChoice = getComputerChoice();

  if (humanChoice === computerChoice) {
    console.log("It's a tie! Both chose", humanChoice);
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    console.log("You win this round! Human:", humanChoice, "beats Computer:", computerChoice);
  } else if (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock")
  ) {
    computerScore++;
    console.log("Computer wins this round! Computer:", computerChoice, "beats Human:", humanChoice);
  } else {
    console.log("Invalid input. Please enter rock, paper, or scissors.");
  }
}

function playGame() {
  {
    playRound();
  }


  console.log("Final Scores → Human:", humanScore, "Computer:", computerScore);
}

const rock=document.getElementById("rock");
const paper=document.getElementById("paper");
const scissors=document.getElementById("scissors");

rock.addEventListener("click",playRound);
paper.addEventListener("click",playRound);
scissors.addEventListener("click",playRound);

playGame();
