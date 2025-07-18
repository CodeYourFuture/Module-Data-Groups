// Predict and explain first...
// - The program will give the recipe title and serves,
// but the ingredients will be undefined
// because it calls the whole object at the end, instead of the key 'ingredients' of the object.

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?
// - First, I was wrong. The ingredients came out as 'object', not undefined.
// - To fix it, I removed the object recipe from the first console.log,
// and I used forEach to go through the 'recipe.ingredients' array and list all elements,
// each on a new line.

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(`${recipe.title} serves ${recipe.serves}
  ingredients:`);

recipe.ingredients.forEach((element) => {
  console.log(element);
});
