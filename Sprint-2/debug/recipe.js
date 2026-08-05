// Predict and explain first...
/* My prediction is that on the ingredients didn't used dot notation to access the element that why it will log undefined 
 instead using for..of loop we can print all the ingredient in new line   */
// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(`${recipe.title} serves ${recipe.serves}
ingredients`);
for (const ingredient of recipe.ingredients) {
  console.log(`*${ingredient}`);
}
