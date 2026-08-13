// Predict and explain first...
//in the template literal the ${recipe}`is referring to the whole object, we want the items in the ingredients of the recipe object, listed line by line.

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

// const recipeKeys = Object.keys(recipe)
// // console.log(recipeKeys)

const ingredients = recipe.ingredients;
// ["olive oil","tomatoes","salt","pepper"]

//create a function to log line by line the elements of an array
function logItemised(items) {
  return items.join("\n");
}

console.log(
  `${recipe.title} serves ${recipe.serves}${"\n"}ingredients:${"\n"}${recipe.ingredients.join("\n")}`
);
