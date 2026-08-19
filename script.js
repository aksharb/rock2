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
        console.log("It's a tie, you both chose ${humanChoiceLower}")
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
}

const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()

playRound(humanSelection, computerSelection)
