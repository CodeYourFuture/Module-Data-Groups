// Prediction and explanation:
// The current code tries to log the whole `recipe` object with `${recipe}`,
// but objects are not automatically formatted in a readable way in a template string.
// This will print something like "[object Object]" instead of the ingredients on separate lines.
// To fix it, we need to access the `ingredients` array and log each ingredient individually.

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

// Fix: log title and serves, then loop over ingredients to print each on a new line
console.log(`${recipe.title} serves ${recipe.serves}
ingredients:`);
for (const ingredient of recipe.ingredients) {
  console.log(ingredient);
}

