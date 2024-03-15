# JS-Crash-Course
## Description 
[JavaScript](https://developer.mozilla.org/en-US/docs/Glossary/JavaScript) is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else. (Okay, not everything, but it is amazing what you can achieve with a few lines of JavaScript code.)

## Learning process
I am following [JavaScript Crash Course For Beginners (youtube.com)](https://www.youtube.com/watch?v=hdI2bqOjy3c&t=2s) and writing down learnings as I go. I will put key learnings and roadblocks in a bulleted list below 

Starting new github repo "JS Crash Course" [lxander42/JS-Crash-Course: A crash course in learning JS (github.com)](https://github.com/lxander42/JS-Crash-Course)

## Roadblocks
- Can't see what I am writing code for - Use [Live Server](Live%20Server.md)

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

If you try to reassign a const you will get the following error: 
![](Pasted%20image%2020240313144229.png)

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

#### Arrays

```js
//ARRAYS
console.log('Arrays notes section'); 

//Arrays are variables that hold multiple values
//This way isn't used that much, using a constructor 'new' keyword
const numbers = new Array(1,2,3,4,5);
console.log(numbers);

//For the most part, just set brackets
const fruits = ['apples', 'oranges', 'pears', 10, true, null, undefined];
/*not statically typed so you don't have to have specific types, with typscript, static 
typing is a thing*/
console.log(fruits);
//to access a specific element, use the brackets it is 0 based
console.log(fruits[2]); 
//to change an element; 
fruits[3] = 'grapes';
console.log(fruits[3]);
/* you can the values in a const array, you just cant set the array to nothing */ 
/* you can toggle a comment with Shift+alt+A */

//Use the push method to add an element to the end of an array
fruits.push('mangos');
console.log(fruits);

//use unshift to add an element to the beginning of the array 
fruits.unshift('berries'); 
console.log(fruits);

//use pop to pop the last value off the array
fruits.pop(); 
console.log(fruits); 

//to check if something is an array 
console.log(Array.isArray(fruits)); 
console.log(Array.isArray('hello'));

//get the index of a certain value 
console.log(fruits.indexOf('berries'));

```

definitely more to arrays, see https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays

#### Object Literals
https://youtu.be/hdI2bqOjy3c?si=7ZN0f_LK6aP9xgcA&t=1810

```js
//OBJECT LITERALS: Key value pairs

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    //you can also embed objects in objects
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}

console.log(person);

//to access a single value, and log multiple values
console.log(person.firstName, person.age);

//take what you have learned about arrays and objects and see if you can get movies to print
//out in the console
console.log(person.hobbies[person.hobbies.indexOf('movies')]);
//literally the most convoluted way to do that.

//destructuring
//think of this not as assigning something but of pulling this out of the person object
const {firstName,  lastName} = person; 
//this allows you to pull out properties from an object 
console.log(firstName); 
console.log(lastName);

//If it is an embedded object like an address, what we can do is destructure a property from
//the subobject 
const {address:{city}} = person; 
console.log(city); 

//adding properties 
person.email = 'john@gmail.com'
console.log(person);

//adding a sub object, just for fun add health data where we list blood type and pressure
person.healthData = {
    bloodType: 'AB',
    bloodPressure: '140/100'
};

//Example: creating an array of objects - TODOs
const todos = [
    {
        id: 1, 
        text: 'Wash the dishes', 
        isCompleted: true
    },
    {
        id: 2, 
        text: 'Check drawing', 
        isCompleted: true
    },
    {
        id: 3, 
        text: 'meeting with shareholders', 
        isCompleted: false
    }
]; 
console.log(todos);

//as a challenge, try to print out 'Check drawing' in the console
console.log(todos[1].text);

//JSON formatting is very similar to object literals
//go here to convert JSON: https://www.freeformatter.com/json-formatter.html
//for example, the todos above are formatted as such: 
[
    {
       "id": 1,
       "text": "Wash the dishes",
       "isCompleted": true
    },
    {
       "id": 2,
       "text": "Check drawing",
       "isCompleted": true
    },
    {
       "id": 3,
       "text": "meeting with shareholders",
       "isCompleted": false
    }
 ]

 //Now how to convert an Array of objects to JSON?
 const todoJSON = JSON.stringify(todos); 
 console.log(todoJSON);
```
Stopped here: https://youtu.be/hdI2bqOjy3c?si=cHpI5x-bI49w119C&t=2270