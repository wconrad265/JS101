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
let answer;


function prompt(msg) {
  let message = MESSAGES[msg];
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function numberPrompt(msg) {
  prompt(msg);
  let answer = readline.question().replace(',',"").replace('%',"");
  while (invalidNumber(answer)) {
    prompt('invalidNumber');
    answer = readline.question()
  }
  return Number(Math.abs(answer));
}

do {
  prompt('welcomeMessage');

  let loanAmount = numberPrompt('loanAmountMessage');
  console.log(loanAmount);

  let apr = numberPrompt('aprMessage') / 100;

  let intrestRate = apr / 12;

  let loanDurationYears = numberPrompt('loanDurationYearsMessage');

  let loanDurationMonths = numberPrompt('loanDurationMonthsMessage') / 12;

  let loanDuration = (loanDurationYears * 12) + loanDurationMonths;

  // eslint-disable-next-line max-len
  let monthlyPayment = loanAmount * (intrestRate / (1 - Math.pow((1 + intrestRate), (-loanDuration))));

  console.log(`Your monthly payment is: $${Number(monthlyPayment).toFixed(2)}`);

  prompt('anotherCalculation');
  answer = readline.question().toLowerCase();

} while (answer === 'yes');

prompt('thankYou');