// Predict and explain first...

// I predict the code will not print the ingredients, because the array is not referenced,
// and it does not have loop to go through each element of the array

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};
console.log(
  recipe.title + " serves " + recipe.serves + recipe.ingredients.join("\n")
);
