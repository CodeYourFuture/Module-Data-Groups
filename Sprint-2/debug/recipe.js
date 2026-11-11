// Predict and explain first...
// it does not make a new line as just pressing enter wont work for that.
// I was wrong, ingredients is showing [object Object], as it wont log out a full object like this.
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
${recipe}`);
