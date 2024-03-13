// Data types: String

const name = 'John'; 
const age = 25;

//Concatenation
console.log('My name is ' + name + ' and I am ' + age); //old way of doing concatenate
// Template Strings (literals)
console.log(`My name is ${name} and I am ${age}`);

//could assign this to a variable
const greeting = `My name is ${name} and I am ${age}`;
console.log(greeting);

//String properties and methods
console.log('String properties and methods Below');
const s = 'Hello World'; 
console.log(s.length); //.length is a property, if it has parenthesis, for example .length(), then it is a method
//A method is basically a function that is associated with an object
console.log(s.toUpperCase());
//taking a substring 
console.log(s.substring(0,5));

