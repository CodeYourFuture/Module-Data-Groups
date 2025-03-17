// Predict and explain first...
/* String Interpolation with Template Literals (${})
The console.log(...) statement uses template literals (backticks `...`), 
which allow embedding variables directly into the string.
${recipe.title} is replaced with "bruschetta"
${recipe.serves} is replaced with 2
Processing ${recipe.ingredients.join("\n")} when .join("\n") joins the array 
elements with a newline (\n), transforming*/
// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?
// We added method .join("\n").
const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(`${recipe.title} serves ${recipe.serves}
  ingredients:
${recipe.ingredients.join("\n")}`);
