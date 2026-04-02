// Predict and explain first...

// at the moment after ingredients we are going to get a log of the recipe Object
// if we change ${recipe} to ${recipe.ingredients} we will get the listed ingredients inside the Array, but not on separate lines
// I could maybe use an Array method?
// Found solution: use Array.prototype.join("\n"), this will convert the array to a string and print each ingredient on a new line

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
