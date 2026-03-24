// Predict and explain first...
// When you run the file as shown, the program will print three lines:
// bruschetta serves 2
// ingredients:
// [object Object]
// This is because when you try to log an object (like the recipe object) in a string, it gets converted to the string "[object Object]". To fix this, we need to access the ingredients property of the recipe object and format it correctly. We can use the join method to join the ingredients array into a string with each ingredient on a new line. Here's how you can fix it:

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(`${recipe.title} serves ${recipe.serves}`);
console.log("ingredients:");
for (const ing of recipe.ingredients) {
  console.log(`- ${ing}`);
}
