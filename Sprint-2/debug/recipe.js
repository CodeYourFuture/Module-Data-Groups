// Predict and explain first...
// ==> this code is not correct as the ingredients act as string not an object key therefore we wont have the value.

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?
// ==> to fix the issue and print each ingredients in new line we need to loop through the array inside our recipe object.

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(`${recipe.title} serves ${recipe.serves}
ingredients:`);
for (let fruits of recipe.ingredients) {
  console.log(fruits);
}
