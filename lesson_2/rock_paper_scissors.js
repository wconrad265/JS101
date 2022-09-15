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

GET input(ROCK, PAPER, SCISSORS FROM USER)
  - convert to lowercase
  - check if valid input, if not ask 

SET computer = random number between 0-2

IF computer = 0
  SET computeAnswer = rock
IF computer = 1
  SET computerAnswer = paper
IF input = 2
  SET computer = scissors

IF input = computer
  PRINT you both choose the same anser (tie)
IF ELSE input = rock && computerAnswer = scissors
  PRINT player wins
IF ELSE input = paper && computerAnswer = rock
  PRINT player wins
IF ELSE input = scissors && computer = paper
  PRINT player wins
ELSE
  PRINT computer wins

GET ask player if they want to play again
  -if not then print play again
  - else redo program

END
*/





const readline = require('readline-sync');


