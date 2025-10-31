console.log("Hello from the script file.");

// Create global winning conditions for user and computer
let humanScore = 0;
let computerScore = 0;

console.log(humanScore);
console.log(computerScore);

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

console.log(getComputerChoice());

// Prompts user and returns string from user input (ideally rock, paper or scissors)
function getHumanChoice() {
    return prompt("Please enter rock, paper or scissors.", "rock");
}

console.log(getHumanChoice());