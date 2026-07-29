// Predict and explain first...

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

//console.log(`${recipe.title} serves ${recipe.serves}
//  ingredients:
//${recipe}`);

for (const ingredient of recipe.ingredients) {
  console.log(ingredient);
}


// [object Object] will be shown because JavaScript converts an object to a string, it becomes "[object object].
// Use the syntax to access the ingredients directly 
