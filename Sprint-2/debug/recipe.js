// Predict and explain first...
// The code does not work because ${recipe} prints the entire object rather than the ingredients array. To display each ingredient on a new line, we need to loop through recipe.ingredients, which is an array. Using a for...of loop allows us to print each ingredient individually.
// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(`${recipe.title} serves ${recipe.serves}
  ("ingredients:")
${recipe}`);

for (const ingredient of recipe.ingredients) {
  console.log(ingredient);
}