let RPS = ["rock", "paper", "scissor"];
humanScore = 0;
computerScore = 0;

function getComputerChoice() {
    let idx = Math.floor(Math.random() * 3);
    let compChoice = RPS[idx];
    return compChoice;
}

function getHumanChoice() {
    let humanInput = prompt("Rock, Paper or Scissor?");
    return humanInput.toLowerCase();
}

function playRound() {
    let h = getHumanChoice();
    let c = getComputerChoice();

    if (h === c) {
        console.log("It's a tie. Let's play again");
    } else if (h==="rock" &&  c==="paper")  {
        humanScore++;
        console.log("You lose! Rock beats Paper");
    } else if (h==="rock" &&  c==="scissor")  {
        humanScore++;
        console.log("You win! Rock beats Scissor");
    } else if (h==="paper" &&  c==="rock")  {      
        humanScore++;
        console.log("You win! Paper beats Rock");    
    } else if (h==="paper" &&  c==="scissor")  {
        computerScore++;
        console.log("You lose! Paper beats Scissor");
    } else if (h==="scissor" &&  c==="rock")  {
        computerScore++;
        console.log("You lose! Scissor beats Rock");
    } else if (h==="scissor" &&  c==="paper")  {
        humanScore++;
        console.log("You win! Scissor beats Paper");
    }
}

function playGame () {
    for (let i = 1; i <= 5; i++) {
        console.log(`\n--- Round ${i} ---`);
        playRound();
        console.log(`Score: You ${humanScore} - ${computerScore} Computer`);    
    }

    if (humanScore > computerScore) {
        console.log("You win the game!");
    } else if (computerScore < humanScore) {
        console.log("You lose the game...");
    } else {
        console.log("It's a tie. Wanna play again?");
    }
}

playGame()