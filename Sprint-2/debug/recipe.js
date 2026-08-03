// Predict and explain first...
// I think it should use recipe.ingredients instead of recipe at line 15
// Ok I tried it and now I think that it should be done with a loop to list the ingredients

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(`${recipe.title} serves ${recipe.serves}
ingredients:`);

for (const i of recipe.ingredients) {
  console.log(i);
}
