// Predict and explain first...
/* I think the first part of line 14 looks fine, but that ${recipe} might log the whole object rather than specifically the items in the ingredients array 
It actually logged [object Object] for ${recipe}. ${x} is similar to doing x.toString(). Doing a string conversion on a whole object returns '[object Object]'.  */

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(`${recipe.title} 
  \n serves: ${recipe.serves}
  \n ingredients:
  \n ${recipe.ingredients.join(`\n`)}`);

