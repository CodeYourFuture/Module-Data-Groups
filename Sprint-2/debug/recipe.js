// Predict and explain first...

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

for (const ingredient of recipe.ingredients) {
  console.log(ingredient);
}


/**[object Object] is shown because ${recipe} converts the
recipe object to a string using JavaScript's default object string representation.
We need to access recipe.ingredients directly and 
iterate over the array using for...of.**/