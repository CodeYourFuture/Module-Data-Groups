// Predict and explain first...

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

//because it gave only recipe object and didn't implement a code to get all the items in the ingredients array in recipe dictionary
const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(`${recipe.title} serves ${recipe.serves}
  ingredients:`);
recipe.ingredients.forEach(ingredient => {
  console.log(ingredient);
});
