// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.
const MESSAGES = require('./calculator_messages.json');

const readline = require('readline-sync');
let answer;
const langaugeCheck = Object.keys(MESSAGES);


function prompt(msg) {
  console.log(`=> ${msg}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

for (let i = 0; i < langaugeCheck.length; i += 1) {
  prompt(MESSAGES[langaugeCheck[i]].welcomeMessage);
}
let language = readline.question().toLowerCase();


while (!langaugeCheck.includes(language)) {
  for (let i = 0; i < langaugeCheck.length; i += 1) {
    prompt(MESSAGES[langaugeCheck[i]].invalidLanguage);
  }
  language = readline.question();
}

let languageMessages = MESSAGES[language];

do {

  prompt(languageMessages.firstNumber);
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(languageMessages.invalidNumber);
    number1 = readline.question();
  }

  prompt(languageMessages.secondNumber);
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(languageMessages.invalidNumber);
    number2 = readline.question();
  }

  prompt(languageMessages.operationPrompt);
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(languageMessages.invalidOperation);
    operation = readline.question();
  }

  let output;

  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }

  prompt(`The result is: ${output}`);

  prompt(languageMessages.anotherCalcualtion);
  answer = readline.question().toLowerCase();

} while (answer === 'yes');

prompt(languageMessages.thankYou);