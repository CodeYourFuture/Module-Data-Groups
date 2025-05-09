function contains() {}

module.exports = contains;


// Predict and explain first...

// The function `contains` is defined here, but it is currently empty. 
// Based on the name of the function, we can predict that it should check if a certain item exists in a collection (e.g., an array or a string).

// Here's how we can fix the function:
// - It should take two parameters: the collection (array or string) and the item to search for.
// - The function should return `true` if the item exists in the collection, and `false` otherwise.

// CORRRECT COE

function contains(collection, item) {
    return collection.includes(item); 
  module.exports = contains;
  