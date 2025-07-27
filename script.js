let RPS = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;
let currentRound = 0;

const roundNo = document.getElementById("roundNo");
const humanScoreDiv = document.getElementById("humanScore");
const compScoreDiv = document.getElementById("compScore");
const final = document.getElementById("final");

const rBtn = document.getElementById("rock");
const pBtn = document.getElementById("paper");
const sBtn = document.getElementById("scissors");
const resetBtn = document.getElementById("reset");

rBtn.addEventListener("click", () => playRound("rock"));
pBtn.addEventListener("click", () => playRound("paper"));
sBtn.addEventListener("click", () => playRound("scissors"));


function getComputerChoice() {
    let idx = Math.floor(Math.random() * 3);
    let compChoice = RPS[idx];
    return compChoice;
}

function playRound(humanChoice) {
    let c = getComputerChoice();
    let h = humanChoice;
    currentRound++;

    if (c === h) {
    } else if (c === "rock" && h === "scissors" ||
        c === "paper" && h === "rock" ||
        c === "scissors" && h === "paper") {                
        humanScore++;
    } else {
        computerScore++;
    }
    
    roundNo.textContent = "Round: " + currentRound;
    humanScoreDiv.textContent = "Human Score: " + humanScore;
    compScoreDiv.textContent = "Computer Score: " + computerScore;
    
    if (humanScore === 5) {
        final.textContent = "Human Wins! 💃";
        resetBtn.style.display = "block";
        rBtn.disabled = true;
        pBtn.disabled = true;
        sBtn.disabled = true;
    } else if (computerScore === 5) {
        final.textContent = "Computer Wins! 🤖";
        resetBtn.style.display = "block";
        rBtn.disabled = true;
        pBtn.disabled = true;
        sBtn.disabled = true;        
    }

}

    resetBtn.addEventListener("click", function() {
        humanScore = 0;
        computerScore = 0;
        currentRound = 0;

        humanScoreDiv.textContent = "Human Score: 0";
        compScoreDiv.textContent = "Computer Score: 0";
        roundNo.textContent = "Round: 0";
        final.textContent = "Final Winner:";

        sBtn.disabled = false;
        pBtn.disabled = false;    
        rBtn.disabled = false;

        resetBtn.style.display = "none";
    }
    )