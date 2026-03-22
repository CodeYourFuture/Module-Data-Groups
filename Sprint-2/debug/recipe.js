// Predict and explain first...It should report the title, serves & ingredient but ingredient might have issues.

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

// 1. Log the title and servings
console.log(`${recipe.title} serves ${recipe.serves}`);
console.log("Ingredients:");

// 2. Loop through ingredients to log each on a new line
recipe.ingredients.forEach(ingredient => {
  console.log(`- ${ingredient}`);
});
