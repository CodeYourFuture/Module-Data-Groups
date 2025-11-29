// Predict and explain first...
// i expect the code to run but not produce the ingredients as its not calling the key pair values of ingredients array with the recipe.ingredients call
// i also expect that each part will not be produced on a new line when called as there is no new line breaks called with the \n after each property has been called in the console log

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?
// to fix this you would need to change "${recipe}`" to "${recipe.ingredients}`"
// to fix each ingredient being called individually you'd use the array call on "recipe.ingredients[]\n" to call individual elements of the array and put them on a new line

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(
  `${recipe.title}\n serves ${
    recipe.serves
  }\n ingredients:\n ${recipe.ingredients.join(", ")}`
);
