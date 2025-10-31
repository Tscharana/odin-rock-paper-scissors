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

// Prompts user and returns string from user input (ideally rock, paper or scissors)
function getHumanChoice() {
    return prompt("Please enter rock, paper or scissors.", "rock");
}

// Create global winning conditions for user and computer
let humanScore = 0;
let computerScore = 0;

// Plays one round humanSelection against computerSelection and use console.log to announce winner, choices and score
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    console.log(humanChoice + " " + computerChoice);

    if ((humanChoice === "rock" && computerChoice === "scissors")
    || (humanChoice === "paper" && computerChoice === "rock")
    || (humanChoice === "scissors" && computerChoice === "paper"))
    {
        humanScore++;
        console.log(`You win! Your ${humanChoice} beats ${computerChoice}. You have ${humanScore} points. The computer has ${computerScore} points.`);
    } else if (humanChoice === computerChoice) {
        console.log(`It's a tie. You both choose ${humanChoice}.`);
    } else {
        computerScore++;
        console.log(`You lose! Your ${humanChoice} is beaten by ${computerChoice}. You have ${humanScore} points. The computer has ${computerScore} points.`);
    }
}

// Gets humanSelection and computerSelection
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);