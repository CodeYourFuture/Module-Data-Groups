// Predict and explain first...
//will logout every ingredients on same line
// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it? Add line breaks

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(`${recipe.title}\n serves ${recipe.serves}
  ingredients:
${recipe.ingredients.join("\n")}`);
