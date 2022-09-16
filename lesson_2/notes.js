
/*
const VALID_CHOICES = ['rock', 'paper', 'scissors'];

let randomIndex = (Math.random() * VALID_CHOICES.length);
console.log(randomIndex);

let test = Math.round(randomIndex);

console.log(test);

let computerChoice = VALID_CHOICES[test - 1];

console.log(computerChoice);*/
/*
let numbers = [1, 2, 3, 4, 5];
let num;

while (num = numbers.shift()) {
  console.log(num);
}

//console.log(numbers); // []
console.log(num);

// eslint-disable-next-line no-undef


let a = 2;
let b = Math.floor(Math.random() * 2);
console.log(b);
a *= b;
console.log(a);

if (a = 2) {
  console.log('The value of `a` is two.');
} else {
  console.log('The value of `a` is NOT two.');
}

let string = '23.5';
let num1 = Number(string);
let num2 = parseInt(string);

console.log(num1);
console.log(num2);

function bar() {
  let foo = 2;
  console.log(foo);  // logs 2
}

let foo = 1;
bar();

console.log(foo);

function footest() {};
*/
function foo1(a) {
  return 2 * a;
}

let foo2 = function(a) {
  return 2 * a;
};

const foo3 = a => 2 * a;

// create a random integer between 0 and 9
let randomNumber = Math.floor(10 * Math.random());

console.log(foo1(randomNumber));
console.log(foo2(randomNumber));
console.log(foo3(randomNumber));