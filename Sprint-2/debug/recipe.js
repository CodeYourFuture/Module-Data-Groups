// Predict and explain first...
// 

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?
// The problem is that the recipe object is being logged directly, which will not display the ingredients in the desired format.
//  Instead, we should iterate over the ingredients array and log each ingredient on a new line.

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(`${recipe.title} serves ${recipe.serves}
  ingredients:`);
recipe.ingredients.forEach((ingredient) => {
  console.log(`- ${ingredient}`);
});
