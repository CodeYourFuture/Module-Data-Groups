// Predict and explain first...
//It won't print ingredients in the new line as we did not located it and we have to use for loop on an array to log it on new lines.

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
  console.log(`* ${i}`);
}
