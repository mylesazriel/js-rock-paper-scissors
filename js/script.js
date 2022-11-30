// COMPUTER INPUT
function getComputerChoice() {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    let randomNum = getRandomInt(3);
    //console.log(randomNum); <--- Used to debug

    let computerChoice = "";

    if (randomNum == 0) {
        computerChoice = "ROCK";
    } else if (randomNum == 1) {
        computerChoice = "PAPER";
    } else if (randomNum == 2) {
        computerChoice = "SCISSORS";
    }

    console.log("The computer chose: " + computerChoice);
    return computerChoice;
}

// USER INPUT
function getUserChoice() {
    let userChoice = prompt("Choose rock, paper or scissors: ").toLocaleUpperCase();

    console.log("You have chosen: " + userChoice);
    return userChoice;
}

// CHECK WINNER
function checkWinner(computerChoice, userChoice) {
    // User chooses rock
    if (userChoice == computerChoice) {
        return "Tie";
    } else if (
        (userChoice == "ROCK" && computerChoice == "SCISSORS") ||
        (userChoice == "PAPER" && computerChoice == "ROCK") ||
        (userChoice == "SCISSORS" && computerChoice == "PAPER")
    ) {
        return "Player";
    } else {
        return "Computer";
    }
}

// PLAY A ROUND
function playRound(computerChoice, userChoice) {
    let result = checkWinner(computerChoice, userChoice);

    if (result == "Tie") {
        return "It's a tie!";
    } else if (result == "Player") {
        return `You Win! ${userChoice} beats ${computerChoice}`;
    } else {
        return `You Lose! ${computerChoice} beats ${userChoice}`;
    }
}

// PLAY A 5-ROUND GAME
function game() {
    let playerScore = 0;
    let computerScore = 0;

    console.log("Let's play Rock, Paper, Scissors!");

    for (let i = 0; i < 5; i++) {
        let userChoice = getUserChoice();
        let computerChoice = getComputerChoice();

        console.log(playRound(computerChoice, userChoice));
        console.log("------------------------------------------")

        if (checkWinner(computerChoice, userChoice) == "Player") {
            playerScore++;
        } else if (checkWinner(computerChoice, userChoice) == "Computer") {
            computerScore++;
        }
    }

    console.log("Game Over!")

    if (playerScore > computerScore) {
        console.log("The Player Won!");
    } else if (playerScore < computerScore) {
        console.log("The Computer Won!");
    } else {
        console.log("Tied game!");
    }
}

game();