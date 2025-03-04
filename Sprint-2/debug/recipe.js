// Predict and explain first...

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
${recipe.ingredients.join(`\n`)}`);

// To get access to values of ingredients recipe.ingredients[0] recipe - object, ingredients - nested array, [0]-[4] - first...fourth value in array, so we can just write it 4 times or we can convert array into the string using join(`\n`) and separate them for each line
