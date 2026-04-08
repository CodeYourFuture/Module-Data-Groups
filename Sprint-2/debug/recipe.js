// Predict and explain first...
// It will trown an error. However my perdiction was wrong it  doesn't throw errow ,instead it print the ingredients array and [ object object] 
// because of the whole recipe object is being converted to string.
// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?
// I fixed by used the join () method to print the each ingredient on new line.
const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(`${recipe.title} serves ${recipe.serves}
  ingredients:
${recipe.ingredients.join('\n  ')}`);
