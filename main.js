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