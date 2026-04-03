// Predict and explain first...

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

/* ============== Initial Script ============== */
const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(`${recipe.title} serves ${recipe.serves}
  ingredients:
${recipe}`);

/* ============== Prediction ============== */
// It will throw an error when trying to print the ingredients.
// This is because the entire recipe object was called instead of
// just its ingredients property. JavaScript cannot print an object,
// hence the error is thrown.

/// ============== Actual Result ============== */
// It tunrs out that JavaScript does not throw an error when
// trying to print an object. Instead, it prints out [object Object].

/* ============== Corrected Script ============== */
console.log(`${recipe.title} serves ${recipe.serves}
  ingredients:
    - ${recipe.ingredients.join("\n    - ")}`);
