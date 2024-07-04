//Create a function named getComputerChoice
  //will randomly return one of the following string values "rock", "paper", or "scissor"
function getComputerChoice(){
  let computerChoice = random(3);
  if (computerChoice == 0){
    return 1;
  } else if (computerChoice == 1){
    return 2;
  } else {
    return 3;
  };
};
//Create a function named getHumanChoice
//Write the code so that getHumanChoice will return on of the valid choices
function getHumanChoice(){
  let humanChoice = prompt("rock, paper, or scissors?");
  humanChoice.toLowerCase();
  if (humanChoice == "rock"){
    return 1
  } else if (humanChoice == "paper"){
    return 2
  } else if (humanChoice == "scissors"){
    return 3
  } else {
    console.log("Invalid Input");
    getHumanChoice();
  }
}
//Create two new variables named humanScore and computerScore
let humanScore = 0;
let computerScore = 0;

//Create a new function called playRound
//define two paramenter for playRound humanChoice and computerChoice
function playRound(humanChoice, computerChoice){
  if (humanChoice == computerChoice){
    console.log("Draw!");
    console.log("Computer: "+computerScore+" Player: "+humanScore);
    return;
  };
  let average = (humanChoice + computerChoice)/2;
  if (average == 1.5){
    if (humanChoice > average){
      console.log ("You win! Paper beats Rock!");
      humanScore++;
      console.log("Computer: "+computerScore+" Player: "+humanScore);
      return;
    }
    else {
      console.log ("You lose! Paper beats Rock!");
      computerScore++;
      console.log("Computer: "+computerScore+" Player: "+humanScore);
      return;
    }
  } else if (average == 2.5){
    if (humanChoice > average){
      console.log ("You win! Scissors beats Paper!");
      humanScore++;
      console.log("Computer: "+computerScore+" Player: "+humanScore);
      return;
    }else {
      console.log ("You lose! Scissors beats Paper!");
      computerScore++;
      console.log("Computer: "+computerScore+" Player: "+humanScore);
      return;
    }
  } else {
    if (humanChoice < average){
      console.log ("You win! Rock beats Scissors!");
      humanScore++;
      console.log("Computer: "+computerScore+" Player: "+humanScore);
      return;
    }else {
      console.log ("You lose! Rock beats Scissors!");
      computerScore++;
      console.log("Computer: "+computerScore+" Player: "+humanScore);
      return;
    }
  }
}

function playGame(number){
  for (let i = 0; i < number; i++){
    playRound(getHumanChoice(), getComputerChoice());
  }
};


function random(number){
  return Math.floor(Math.random()*number)
}

