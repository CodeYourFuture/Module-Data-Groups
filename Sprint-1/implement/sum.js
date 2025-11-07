function sum(elements) {
  // Start with a total of 0
  let total = 0;

  // Look at each item in the array one by one
  for (let i = 0; i < elements.length; i++) {
    const currentElement = elements[i];

    // Check if the current item is a number (not a string, not null, etc.)
    // typeof checks if it's a number, and !isNaN makes sure it's a valid number (not NaN)
    if (typeof currentElement === "number" && !isNaN(currentElement)) {
      // If it's a valid number, add it to our total
      total = total + currentElement;
    }
    // If it's not a number, we just skip it and move to the next item
  }

  // Return the final total
  return total;
}

module.exports = sum;
