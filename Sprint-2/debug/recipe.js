// Predict and explain first...

// The code will log the values of title, serves correctly but it won't be able to return the value of the ingredients because it needs to be iterated in order to access the values contained within.

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(`${recipe.title} serves ${recipe.serves}
  ingredients:
${recipe.ingredients}`);
