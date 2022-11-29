// COMPUTER INPUT
function getComputerChoice() {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    let randomNum = getRandomInt(3);
    //console.log(randomNum); <--- Used to debug

    if (randomNum == 0) {
        computerChoice = "ROCK";
    } else if (randomNum == 1) {
        computerChoice = "PAPER";
    } else if (randomNum == 2) {
        computerChoice = "SCISSORS";
    }

    console.log("The computer chose: " + computerChoice);
    return(computerChoice);
}

// USER INPUT
function getUserChoice() {
    let userChoice = prompt("Choose rock, paper or scissors: ").toLocaleUpperCase();

    console.log("You have chosen: " + userChoice);
    return(userChoice);
}

// PLAY A SINGLE ROUND
function playRound(computerChoice, userChoice) {
    // User chooses rock
    if (userChoice == "ROCK" && computerChoice == "ROCK") {
        console.log("It's a tie!");
    } else if (userChoice == "ROCK" && computerChoice == "PAPER") {
        console.log("Uh-oh, Computer won!");
    } else if (userChoice == "ROCK" && computerChoice == "SCISSORS") {
        console.log("Congrats, you won!");
    // User chooses paper
    } else if (userChoice == "PAPER" && computerChoice == "ROCK") {
        console.log("Congrats, you won!");
    } else if (userChoice == "PAPER" && computerChoice == "PAPER") {
        console.log("It's a tie!")
    } else if (userChoice == "PAPER" && computerChoice == "SCISSORS") {
        console.log("Uh-oh, Computer won!");
    // User chooses scissors
    } else if (userChoice == "SCISSORS" && computerChoice == "ROCK") {
        console.log("Uh-oh, Computer won!");
    } else if (userChoice == "SCISSORS" && computerChoice == "PAPER") {
        console.log("Congrats, you won!");
    } else if (userChoice == "SCISSORS" && computerChoice == "SCISSORS") {
        console.log("It's a tie!")
    }
}

// 5-ROUND GAME
function game() {
    
}