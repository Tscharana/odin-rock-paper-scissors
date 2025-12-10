// Randomly returns one of the three strings "rock", "paper" or "scissors".
function getComputerChoice() {
    const random3 = Math.floor((Math.random() * 3) + 1);
    if (random3 === 1) {
            return "rock"
        } else if (random3 === 2) {
            return "paper"
        } else {
            return "scissors"
        }
}

// Create global winning conditions for user and computer
let humanScore = 0;
let computerScore = 0;
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const body = document.querySelector("body");
const output = document.querySelector("#output")
const human = document.querySelector("#humanscore");
const computer = document.querySelector("#computerscore");

body.addEventListener("click", (event) => {
    if (event.target.id === "rock" || event.target.id === "paper" || event.target.id === "scissors") {
        playRound(event.target.id);
    }
});


// Plays one round humanSelection against computerSelection and use console.log to announce winner, choices and score
function playRound(humanChoice) {
    humanChoice = humanChoice.toLowerCase();
    let computerChoice = getComputerChoice();
    console.log(humanChoice + " " + computerChoice);

    if ((humanChoice === "rock" && computerChoice === "scissors")
    || (humanChoice === "paper" && computerChoice === "rock")
    || (humanChoice === "scissors" && computerChoice === "paper"))
    {
        humanScore++;
        output.textContent = `You win! Your ${humanChoice} beats ${computerChoice}. You have ${humanScore} points. The computer has ${computerScore} points.`;
    } else if (humanChoice === computerChoice) {
        output.textContent = `It's a tie. You both choose ${humanChoice}.`;
    } else {
        computerScore++;
        output.textContent = `You lose! Your ${humanChoice} is beaten by ${computerChoice}. You have ${humanScore} points. The computer has ${computerScore} points.`;
    }
    human.textContent = `Human score: ${humanScore} points.`;
    computer.textContent = `Computer score: ${computerScore} points.`;
    if (humanScore >= 5)
    {
        output.textContent += "You reached 5 points and win the whole game.";
        humanScore = 0;
        computerScore = 0;
    } else if (computerScore >= 5) {
        output.textContent += " The computer reached 5 points and win the whole game.";
        humanScore = 0;
        computerScore = 0;
    }
}




// // Gets humanSelection and computerSelection
// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// playRound(humanSelection, computerSelection);

// // Show the results of 5 rounds with console.log
// if (humanScore > computerScore) {
//     console.log(`You win after 1 round! You have ${humanScore} points. The computer has ${computerScore} points.`);
// } else if (humanScore === computerScore) {
//     console.log(`Tie after 1 round! You have ${humanScore} points. The computer has ${computerScore} points.`);
// } else {
//     console.log(`You lose after 1 round! You have ${humanScore} points. The computer has ${computerScore} points.`);
// }