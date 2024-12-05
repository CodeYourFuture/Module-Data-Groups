// Predict and explain first...
// wrong ="Objects" are not iterable 
//NEED CHANG const value of author) TO = const value of Object.values(author)

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

for (const value of Object.values(author)) {
  console.log(value);
}

/*Zadie;
Smith;
writer;
40;
true;*/

/*for (const value of author) { // wrong syntax 
  console.log(value);
}

// right = Object.values(author)

for ( Object.values(author)) {
  // wrong syntax
  console.log(value);
}

_________________________________

EXAMPLES ITERABLES IN JS:

Common Examples of Iterables:

Arrays:

javascript
Copy code
const numbers = [1, 2, 3];
for (const number of numbers) {
  console.log(number); // Outputs: 1, then 2, then 3
}

Arrays are iterable because you can go through each element one at a time.

Strings:

javascript
Copy code
const word = "hello";
for (const letter of word) {
  console.log(letter); // Outputs: h, e, l, l, o
}

Other Examples:

Map
Set
NodeLists (e.g., lists of elements in the DOM)
Custom objects, if you explicitly make them iterable.

What Makes Something Iterable?
To be iterable, an object must implement the Symbol.iterator method. This is a special JavaScript function that defines how to produce the items in a sequence.

Arrays and strings have this method built-in, so they’re naturally iterable.
Plain objects (e.g., { key: "value" }) do not have this method, so they are not iterable by default.

How to Check if Something Is Iterable
You can check if an object is iterable by seeing if it has the Symbol.iterator property:

javascript
Copy code
const arr = [1, 2, 3];
console.log(typeof arr[Symbol.iterator]); // Outputs: "function"

const obj = { a: 1, b: 2 };
console.log(typeof obj[Symbol.iterator]); // Outputs: "undefined"
What Happens If It’s Not Iterable?
If you try to use a for...of loop on a non-iterable object, like a plain object ({}), you'll get a TypeError because the object doesn’t know how to provide its items one by one.*/