# JS-Crash-Course
## Description 
[JavaScript](https://developer.mozilla.org/en-US/docs/Glossary/JavaScript) is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else. (Okay, not everything, but it is amazing what you can achieve with a few lines of JavaScript code.)

## Learning process
I am following [JavaScript Crash Course For Beginners (youtube.com)](https://www.youtube.com/watch?v=hdI2bqOjy3c&t=2s) and writing down learnings as I go. I will put key learnings and roadblocks in a bulleted list below 

Stopped here https://youtu.be/hdI2bqOjy3c?si=9R2xFayvoJ7igrWT&t=1341

Starting new github repo "JS Crash Course" [lxander42/JS-Crash-Course: A crash course in learning JS (github.com)](https://github.com/lxander42/JS-Crash-Course)

## Roadblocks
- roadblock 1 

## Notes
### What is JavaScript?
- High level, interpreted programming language, lots of abstraction, it is interpreted at runtime. 
- Conforms to the ECMAScript specification, could say that JavaScript is ECMAScript. 
- Multi-paradigm
- Runs on the client/browser as well as on the server ([Node.js](Node.js))

### What you will learn in this course
**This is a crash course**
- Variables & Data Types
- Arrays
- Object Literals
- Methods for strings, arrays, objects, etc
- Loops - for, while, for...of, forEach, map
- Conditionals (if, ternary & switch)
- Functions (normal & arrow)
- OOP (Object Oriented Programming) (prototypes & classes)
- DOM (Document Object Model) Selection
- DOM (Document Object Model) manipulation
- Events
- Basic Form Validation

**Some more courses from this guy that could be useful**
- [JavaScript DOM Crash Course - Part 1 (youtube.com)](https://www.youtube.com/watch?v=0ik6X4DJKCc)
- [JavaScript OOP Crash Course (ES5 & ES6) (youtube.com)](https://www.youtube.com/watch?v=vDJpGenyHaA)
- [Fetch API Introduction (youtube.com)](https://www.youtube.com/watch?v=Oive66jrwBs)
	- Making HTTP requests and interacting with APIs
- [JavaScript Higher Order Functions & Arrays (youtube.com)](https://www.youtube.com/watch?v=rRgD1yVwIvE)
- [Async JS Crash Course - Callbacks, Promises, Async Await (youtube.com)](https://www.youtube.com/watch?v=PoRJizFvM7s)
- [JavaScript Fundamentals For Beginners (youtube.com)](https://www.youtube.com/watch?v=vEROU2XtPR8&list=PLillGF-RfqbbnEGy3ROiLWk7JMCuSyQtX&index=2)

### Methods
**Method example**
```javascript
console.log('Hello World'); 
```

*log* is a **method** of the **object** *console* 

Other methods for the console object can be found at [console - Web APIs | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/API/console)

The MDN documentation is the Mozilla developer network and it is for all of Javascript. We can look for all methods we want to use. 

### Variables 
```js
//var, let, const are variables
```

You don't really want to use var because var is a globally scoped variable and can interfere with other global variables. 

let - values can be reassigned.
const - constant variable. 

### Variable Types

```js
// Data types: String, Numbers, Boolean, null, undefined, and others

const name = 'John';
const age = 30;
const rating = 4.5 //even though it is a decimal it is still just a number
const isCool = true;
const x = null; //return value will say 'Object' but it is really null
const y = undefined;
let z; //also undefined by default

console.log(typeof name); //gives the type of whatever object you put here
```

#### Strings

```js
// Data types: String

const name = 'John';
const age = 25;

//Concatenation

//old way of doing concatenate
console.log('My name is ' + name + ' and I am ' + age);

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
```







