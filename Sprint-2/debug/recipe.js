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
  ${recipe.ingredients.join("\n")}`);
// The code is not working because the ingredients property is an array, so we can't log it directly. We need to iterate over the array and log each element separately
// We can use the join() method to join the elements of the array into a string, with each element separated by a newline character
// We can use the template literal to log the title and serves properties, and then use a separate line to log the ingredients property