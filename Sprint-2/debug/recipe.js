// Predict and explain first...
// My prediction is that ingredients are not gonna be printed out. because the object
// is not attached to the key in the console.log.

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

// We can fix it by using for..of loop for the array .

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(`${recipe.title} serves ${recipe.serves}`);

for (const item of recipe.ingredients) {
  console.log(item);
}
