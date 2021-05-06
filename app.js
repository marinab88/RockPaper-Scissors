const getUserChoice = userInput => {
  userInput=userInput.toLowerCase();

  // check to make sure that the user typed a valid choice
  if (userInput==='rock' || userInput==='paper' || userInput==='scissors') {
    return userInput;
  } else {
    console.log("Error!!! Choose rock, paper or scissors!");
  }  
};
//console.log(getUserChoice('Scissors')); 
//lucreaza corect pina aici, p4


//Computer make a choice
const getComputerChoice = () => {
  let number=Math.floor(Math.random()*3);
  if (number===0) {
    return 'rock';
  } else if (number===1) {
    return 'paper';
  } else {
    return 'scissors';
  }
};
//console.log(getComputerChoice());


//Function that determine the winner
let determineWinner = (userChoice, computerChoice) => {
  if (userChoice===computerChoice) {
    return console.log('The game is tie.');
  }

  if (userChoice==='rock') {
      if (computerChoice==='paper') {
        return console.log('The Computer Won!');
      } else {
        return console.log('The User Won!');
      }  
  }

  if (userChoice==='paper') {
    if (computerChoice==='scissors') {
      return console.log('The Computer Won!');
    } else {
      return console.log('The User Won!');
    }
  }

  if (userChoice==='scissors') {
    if (computerChoice==='rock') {
      return console.log('The Computer Won!');
    } else {
      return console.log('The User Won!');
    }
  } 
};
//determineWinner('rock', 'scissors');

let playGame = () => {
  let userChoice=getUserChoice('rock' || 'paper' || 'scossors');
  let computerChoice=getComputerChoice();
  console.log('The user: ' + getUserChoice(userChoice));
  console.log('The computer: ' + getComputerChoice(computerChoice));

  console.log(determineWinner(userChoice, computerChoice));
};
playGame();
