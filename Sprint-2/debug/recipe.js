// Predict and explain first...

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

//answer :
// ${recipe.title} → "bruschetta"

// ${recipe.serves} → 2

// ${recipe} → wrong!  = > because recipe is an object, and when you interpolate it into a string, it becomes:

// [object Object]

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(recipe.title + "serves" + recipe.serves);
console.log("ingredients:");

for (let i = 0; i < recipe.ingredients.length; i++) {
  console.log(recipe.ingredients[i]);
}
