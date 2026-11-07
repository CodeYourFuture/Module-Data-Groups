// Predict and explain first...
// This will print "bruschetta serves 2
//  ingredients: " Then not sure, but definitely not the ingredients
// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(`${recipe.title} serves ${recipe.serves}
  ingredients:\n\t${recipe.ingredients.join("\n\t")}`);
