// Predict and explain first...
// The code attempts to log the ingredients array within the recipe object, but it uses ${recipe} in the string template. 
// This will log the string representation of the entire recipe object, which isn't the desired behavior.
//Instead, you want to explicitly log each ingredient on a new line. The code also doesn't include logic to format the ingredients array properly.


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
