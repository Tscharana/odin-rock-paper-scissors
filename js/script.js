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

// Plays 5 rounds of playRound(), keeps the score and declare winner or tie in the end with console.log
function playGame() {

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

    for (i = 0; i < 5; i++) {
        // Gets humanSelection and computerSelection
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    // Show the results of 5 rounds with console.log
    if (humanScore > computerScore) {
        console.log(`You win after 5 rounds! You have ${humanScore} points. The computer has ${computerScore} points.`);
    } else if (humanScore === computerScore) {
        console.log(`Tie after 5 rounds! You have ${humanScore} points. The computer has ${computerScore} points.`);
    } else {
        console.log(`You lose after 5 rounds! You have ${humanScore} points. The computer has ${computerScore} points.`);
    }
}

playGame();