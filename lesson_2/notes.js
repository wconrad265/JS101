let name = 'tom';
console.log(name);

function changeName(name) {
  name = "bob"; // does this reassignment change the variable outside the function?
  console.log(name);
}

function anotherFunction() {
  let name = "jim";
  changeName(name);
  console.log(name); // => logs 'jim'
}

anotherFunction();