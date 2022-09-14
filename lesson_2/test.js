const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';

let regexTwo = 'o';
const regexthree = new RegExp(regexTwo, 'g');
const foundTwo = paragraph.match(regexthree).length;
const foundThree = paragraph.match(regexTwo).length;

console.log(foundTwo);
console.log(foundThree);
// expected output: Array ["T", "I"]

const greeting = '   ';

console.log(greeting);
console.log(greeting.trimStart());