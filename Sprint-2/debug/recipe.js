// Predict and explain first...

// For the first glance, I guess I have to do a looping in recipe.ingredients
// Before any changes, ingredients: ${recipe} would be print out the whole object.
// for print out each ingredient on a new line, I may have to use \n

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
${recipe.ingredients.join("\n")}`);

// After the first attempt, I realized that I can't use a for loop inside ${}
// so, I tried map function to get each ingredient and added \n between them.
