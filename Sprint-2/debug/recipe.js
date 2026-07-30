/* Predict and explain first...

This code will log the title and serves correctly, but the ingredients will not be logged on separate lines as intended.
This happens because the ingredients array is being logged as a whole object, which will not format it correctly.
The output will for the ingredients will be [object Object] instead of each ingredient on a new line.

 */

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(`${recipe.title} serves ${recipe.serves}
  ingredients:`);
recipe.ingredients.forEach((ingredient) => {
  console.log(`- ${ingredient}`);
});
