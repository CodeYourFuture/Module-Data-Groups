// Predict and explain first...

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?
    //i tried to use map but could not write the code itself i checked it online. AI help me with another solution.
    //.join 

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(`${recipe.title} serves ${recipe.serves}
ingredients:
  ${recipe.ingredients.join("\n")}`);

console.log(`${recipe.title} serves ${recipe.serves}
ingredients:
${recipe.ingredients.map((ingredient) => `  ${ingredient}`).join("\n")}`);