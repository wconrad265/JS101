/*
Make rock paper scissors game;
Our version of the game lets the user play against the computer.
The game flow should go like this:

The user makes a choice.
The computer makes a choice.
The winner is displayed.
-------------------------------------------------------------------
Ask user for input (rock, paper, scissors)
  -assign number to variable based on answer between (0-2)
assign random number to fpr computer's choise
compare two numbers, and return the answer

--------------------------------------------------------------------
START

GET input(ROCK, PAPER, SCISSORS, Lizard, Spock FROM USER)
  - convert to lowercase
  - check if valid input, if not ask

SET computer = random number between 0-4

// eslint-disable-next-line max-len
Assign rock, paper, sicissors, lizard, spock to
computer's choice based on input

IF input = computer
  PRINT you both choose the same anser (tie)
IF ELSE input = rock && (computerAnswer = scissors || Lizard)
  PRINT player wins
IF ELSE input = paper && (computerAnswer = rock || Spock)
  PRINT player wins
IF ELSE input = scissors && (computerAnswer = paper || Lizard)
  PRINT player wins
IF ELSE input = lizard && (computerAnswer = spock || Paper)
  PRINT player wins
IF ELSE input = spock && (computerAnswer == Rock || scissors)
  PRINT player wins
ELSE
  PRINT computer wins

GET ask player if they want to play again
  -if not then print play again
  - else redo program

END
*/

const readline = require('readline-sync');
const VALID_CHOICES = ['r', 'p', 'sc','l','sp'];
const VALID_FULL_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const VALID_COMBINED = [];
let userWin = 0;
let computerWin = 0;

for (let i = 0; i < VALID_CHOICES.length; i += 1) {
  VALID_COMBINED[i] = `${VALID_CHOICES[i]} for ${VALID_FULL_CHOICES[i]}`;
}

function convertChoice (input) {
  let conertedInput;

  for (let i = 0; i < VALID_CHOICES.length; i += 1) {
    if (input === VALID_CHOICES[i]) {
      conertedInput = VALID_FULL_CHOICES[i];
    }
  }

  return conertedInput;
}

function winCount(result) {
  if (result === "user") {
    userWin += 1;
  } else if (result === "computer") {
    computerWin += 1;
  }
}

function winCountPrint() {
  prompt('--------------------------------------------------------------------------------');
  prompt(`User: ${userWin}`);
  prompt(`Computer: ${computerWin}`);
  prompt('--------------------------------------------------------------------------------');
}

function winCheck() {
  if (userWin === 3) {
    prompt('User has won best ouf of three, and has become the grand winner!');
    return false;
  } else if (computerWin === 3) {
    prompt('Computer has won best out of three, and has become the grand winner!');
    return false;
  } else {
    return true;
  }
}
function displayWinnter(choice, computerChoice) {
  prompt(`You chose ${convertChoice(choice)}, computer chose ${convertChoice(computerChoice)}`);

  if ((choice === 'r' && (computerChoice === 'sc' || computerChoice === 'l') ) ||
      (choice === 'sc' && (computerChoice === 'p' || computerChoice === 'l')) ||
      (choice === 'p' && (computerChoice === 'r' || computerChoice === 'sp')) ||
      (choice === 'l' && (computerChoice === 'sp' || computerChoice === 'p')) ||
      (choice === 'sp' && (computerChoice === 'r' || computerChoice === 'sc'))) {
    prompt("You win");
    return 'user';
  } else if (choice === computerChoice) {
    prompt("It is a tie");
    return 'tie';
  } else {
    prompt("The computer won");
    return 'computer';
  }

}

function prompt(msg) {
  console.log(`=> ${msg}`);
}

prompt(`Welcome to ${VALID_FULL_CHOICES.join(', ')} best of three`);

while (true) {
  prompt(`Choose one: ${VALID_COMBINED.join(', ')}`);
  let choice = readline.question().toLowerCase();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question().toLowerCase();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  let count = displayWinnter(choice,computerChoice);

  winCount(count);

  winCountPrint();

  if (!winCheck()) break;

  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();

  while (answer[0]  !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n")');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') break;
  prompt('--------------------------------------------------------------------------------');
}

prompt('Thank you for playing!');
