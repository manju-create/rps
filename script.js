function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}


let humanScore = 0;
let computerScore = 0;

const resultsDiv=document.getElementById("result");
const scoreDiv=document.getElementById("score");
const winnerDiv=document.getElementById("winner");

function playRound(humanChoice) {
   if (humanScore >= 5 || computerScore >= 5) return; 
  const  computerChoice = getComputerChoice();

  if (humanChoice === computerChoice) {
   resultsDiv.textContent=`It's a tie! Both chose${humanChoice}`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    resultsDiv.textContent=`You win this round! ${humanChoice}beats ${computerChoice}`;
  }  else{
    computerScore++;
     resultsDiv.textContent=`Computer wins this round!  ${computerChoice} beats  ${humanChoice}`;
  } 
  

scoreDiv.textContent=`Human: ${humanScore} | Computer: ${computerScore}`;
 if (humanScore === 5) {
    winnerDiv.textContent = "🎉 You win the game!";
  } else if (computerScore === 5) {
    winnerDiv.textContent = "😵 Computer wins the game!";
  }
}


const rock=document.getElementById("rock");
const paper=document.getElementById("paper");
const scissors=document.getElementById("scissors");

rock.addEventListener("click",()=>playRound("rock"));
paper.addEventListener("click",()=>playRound("paper"));
scissors.addEventListener("click",()=>playRound("scissors"));

  
