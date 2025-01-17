var humanScore = 0;
var computerScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getHumanChoice() {
    const validChoices = ["rock", "paper", "scissors"];
    let input = false;
    while (!input) {
        const choice = prompt("Rock, Paper, or Scissors?");
        if (choice == null) continue; // Handles "Cancel" in prompt
        const choiceInLower = choice.toLowerCase();
        if (validChoices.includes(choiceInLower)) {
            input = true;
            return choiceInLower;
        }
    }
}

function playRound(humanSelection, computerSelection) {
    if (humanSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (humanSelection === 'rock' && computerSelection === 'scissors') ||
        (humanSelection === 'paper' && computerSelection === 'rock') ||
        (humanSelection === 'scissors' && computerSelection === 'paper')
    ) {
        humanScore++;
        return "You win!";
    } else {
        computerScore++;
        return "You lose!";
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        console.log(`Round ${i + 1}: ${result}`);
    }
    console.log(`Final Scores: Human: ${humanScore}, Computer: ${computerScore}`);
}

playGame();