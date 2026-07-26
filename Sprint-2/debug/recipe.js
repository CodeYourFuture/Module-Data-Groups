// Predict and explain first...
/*
console.log(`${recipe.title} serves ${recipe.serves}
  ingredients:
${recipe}`);// here it misses recipe.ingredients 
  */
// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(`${recipe.title} serves ${recipe.serves}
  ingredients:
${recipe.ingredients.join("\n")}`); // this make the list to be logged on a new line - not predicted at first
