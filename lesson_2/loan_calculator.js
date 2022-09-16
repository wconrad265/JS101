/*
Function that returns the montly payment & loan duration
in months based on the loan amount, APR, loan duration

Ask User for loan amount, APR, & loan duration
  -calculate APR
  -plug into formula
  -return results

START

GET loanAmount
  - check if it is number
  - remove any ,
GET apr
  - check if it is number and remove %
GET loanDurationYears
  - check to make sure is number
Get loanDurationMonths
  - check to make sure is number

SET intrestRate = apr / 12
  - check if intrest rate
  -

SET monthlyPayment = calculate monthly payment using formula

PRINT monthlyPayment

END

*/

const readline = require('readline-sync');
const MESSAGES = require('./loan_calculator_messages.json');
const MONTHS_IN_YEAR = 12;

let loanAmount;
let intrestRate;
let loanDurationYears;
let loanDurationMonths;
let loanDuration;
let apr;
let answer;

function prompt(msg) {
  let message = MESSAGES[msg];
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trim() === '' || Number.isNaN(Number(number));
}

function invalidWholeNumber(number) {
  return number.trim() === '' || Number.isNaN(Number(number)) || !(Math.round(Number(number)) === Number(number));
}

function checkZero(num) {
  let nonZero = numberPrompt(num);

  while (nonZero === 0) {
    prompt('checkZero');
    nonZero = numberPrompt(num);
  }
  return nonZero;
}

function numberPrompt(msg) {

  prompt(msg);
  let answer = readline.question().replace(',',"").replace('%',"");

  while (invalidNumber(answer)) {
    prompt('invalidNumber');
    answer = readline.question().replace(',',"").replace('%',"");
  }

  return Number(Math.abs(answer));
}
function wholeNumberPrompt(str) {

  prompt(str);
  let wholeAnswer = readline.question().replace(',',"").replace('%',"");

  while (invalidWholeNumber(wholeAnswer)) {
    prompt('wholeNumber');
    wholeAnswer = readline.question().replace(',',"").replace('%',"");
  }

  return Number(Math.abs(wholeAnswer));
}

function calculateMonthlyPayment() {
  if (intrestRate === 0) {
    return loanAmount / (loanDuration);
  } else {
    return loanAmount *
      (intrestRate / (1 - Math.pow((1 + intrestRate), (-loanDuration))));
  }
}

function loanDurationZero() {
  while (loanDuration === 0) {
    prompt('loanDurationZero')

    loanDurationYears = wholeNumberPrompt('loanDurationYearsMessage');

    loanDurationMonths = wholeNumberPrompt('loanDurationMonthsMessage') / MONTHS_IN_YEAR;

    loanDuration = (loanDurationYears * 12) + loanDurationMonths;
  }
}

function anotherCalculation() {
  prompt('anotherCalculation');
  answer = readline.question().toLowerCase();
  anotherCalculationCheck();
}

function anotherCalculationCheck() {
  while (answer[0]  !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n")');
    answer = readline.question().toLowerCase();
  }
}
while (true) {
  prompt('welcomeMessage');

  loanAmount = checkZero('loanAmountMessage');

  console.log(loanAmount);

  apr = numberPrompt('aprMessage') / 100;

  intrestRate = apr / MONTHS_IN_YEAR;

  loanDurationYears = wholeNumberPrompt('loanDurationYearsMessage');

  loanDurationMonths = wholeNumberPrompt('loanDurationMonthsMessage') / MONTHS_IN_YEAR;

  loanDuration = (loanDurationYears * 12) + loanDurationMonths;

  loanDurationZero();

  let monthlyPayment = calculateMonthlyPayment();

  console.log(`Your monthly payment is: $${Number(monthlyPayment).toFixed(2)}\n`);

  anotherCalculation();

  if (answer[0] !== 'y') break;
  prompt('-');

}
prompt('-');
prompt('thankYou');