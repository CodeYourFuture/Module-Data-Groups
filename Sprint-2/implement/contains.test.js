const contains = require("./contains.js");

/*
Implement a function called contains that checks an object contains a
particular property

E.g. contains({a: 1, b: 2}, 'a') // returns true
as the object contains a key of 'a'

E.g. contains({a: 1, b: 2}, 'c') // returns false
as the object doesn't contains a key of 'c'
*/

// Acceptance criteria:

// Given a contains function
// When passed an object and a property name
// Then it should return true if the object contains the property, false otherwise

// Given an empty object
// When passed to contains
// Then it should return false
test("contains on empty object returns false", () => {
    
    const currentOutput = contains({}, "2");
    const targetOutput = false;
    expect(currentOutput).toEqual(targetOutput);
});

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
const user = {
  id: 101,
  name: "Amina Yusuf",
  email: "amina@example.com",
  isVerified: true,
};
test("an object contains an existing property name returns true", () => {
    const currentOutput = contains(user, "name");
    const targetOutput = true;
    expect(currentOutput).toEqual(targetOutput);
});

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false

const book = {
  title: "Harry Potter and the Sorcerer's Stone",
  author: "J.K. Rowling",
  publishedYear: 1997,
  genres: "Fantasy",
  pages: 309
};

test("an object doesn't contain a property name returns false", () => {
    const currentOutput = contains(book, "series");
    const targetOutput = false;
    expect(currentOutput).toEqual(targetOutput);
});

// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error

const programmingLanguages = ["JavaScript", "Python", "Java", "C++", "Go", "Rust", "Ruby"];
const languages = null;
const name = "Hassan";

test("Returns false when invalid parameters are passed", () => {
    const currentOutput = contains(programmingLanguages);
    const targetOutput = false;
    expect(currentOutput).toEqual(targetOutput);
    const currentOutput1 = contains(languages, "null");
    const targetOutput1 = false;
    expect(currentOutput1).toEqual(targetOutput1);
    const currentOutput2 = contains(name, "Hassan");
    const targetOutput2 = false;
    expect(currentOutput2).toEqual(targetOutput2);
});
