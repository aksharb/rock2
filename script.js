let humanScore = 0
let computerScore = 0

//function to return "rock", "paper", "scissors" randomly
function getComputerChoice() {
    let numberValue = Math.floor(Math.random() * 3)
    if (numberValue == 0){
        return "rock"
    } else if (numberValue == 1){
        return "paper"
    } else {
        return "scissors"
    }
}

//function to take user choice and return it
function getHumanChoice() {
    let userChoice = prompt("Please enter your choice")
    return userChoice
}

function playRound(humanChoice, computerChoice) {
    let humanChoiceLower = humanChoice.toLowerCase()
    if(humanChoiceLower == computerChoice)
    {
        console.log(`It's a tie, you both chose ${humanChoiceLower}`)
    } else{
        if(humanChoiceLower == "rock"){
            if(computerChoice == "paper"){
                computerScore++
            } else{
                humanScore++
            }
        } else if(humanChoiceLower == "paper"){
            if(computerChoice == "rock"){
                humanScore++
            } else{
                computerScore++
            }
        }
        else{
            if(computerChoice == "rock"){
                humanScore++
            } else{
                computerScore++
            }
        }
    }
    // console.log(`human score: ${humanScore}`)
    // console.log(`computer score: ${computerScore}`);
    if (humanChoiceLower !== computerChoice) {
            console.log(`You chose ${humanChoice}, the computer chose ${computerChoice}`);
    console.log(`Your score: ${humanScore}\nComputer's score: ${computerScore}`);
    }
}



function playGame() {
    const humanSelection = getHumanChoice()
    const computerSelection = getComputerChoice()
    playRound(humanSelection, computerSelection)
}

for(let i = 0; i < 5; i++){
    playGame()
}
if (humanScore > computerScore){
    console.log(`You won ${humanScore} out of 5 rounds, you win!`)
} else if(computerScore > humanScore){
    console.log(`You lost ${computerScore} out of 5 rounds, you lose`);
} else {
    console.log(`You and the computer both won ${humanScore} rounds each out 5, it's a tie!`);
}