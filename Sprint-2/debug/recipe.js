// Predict and explain first...

// Prediction ======> bruschetta serves 2 ingredients:[object Object]

// Explanation ======> Because template literals automatically convert objects into the string [object Object] rather than listing their properties, logging ${recipe} fails to display the ingredients array, meaning you must iterate through recipe.ingredients using a for...of loop or .forEach() to log each item on a new line.

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
`);

for (const ingredient of recipe.ingredients) {
  console.log(ingredient);
}
