//Create a function named getComputerChoice
  //will randomly return one of the following string values "rock", "paper", or "scissor"
function getComputerChoice(){
  let computerChoice = random(3);
  console.log(computerChoice);
  if (computerChoice == 0){
    return "rock";
  } else if (computerChoice == 1){
    return "paper";
  } else {
    return "scissors";
  };
};
//Create a function named getHumanChoice
//Write the code so that getHumanChoice will return on of the valid choices
function getHumanChoice(){
  let humanChoice = prompt("rock, paper, or scissors?");
  if (humanChoice == "rock"){
    return "rock"
  } else if (humanChoice == "paper"){
    return "paper"
  } else if (humanChoice == "scissors"){
    return "scissors"
  } else {
    console.log("Invalid Input");
    getHumanChoice();
  }
}





function random(number){
  return Math.floor(Math.random()*number)
}

