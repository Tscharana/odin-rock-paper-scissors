console.log("Hello from the script file.");

// Randomly returns one of the three strings "rock", "paper" or "scissors".
function getComputerChoice () {
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