const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

// Explanation:
// The issue was directly interpolating `recipe`, which converts the object to `[object Object]`.
// To fix this, I needed access each property and loop over the `ingredients` array to format it correctly.

console.log(`${recipe.title} serves ${recipe.serves}
Ingredients:
${recipe.ingredients.join("\n")}`);
