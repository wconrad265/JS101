// debug.js

let counter = 1;

while (counter <= 5) {
  console.log(counter);
  debugger;
  counter += 1;
}

let data = 'not valid JSON';

JSON.parse(data);  // throws SyntaxError: Unexpected token i in JSON at position 0