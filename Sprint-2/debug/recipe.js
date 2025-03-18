// Predict and explain first...
// it's not calling ingredients array form the object
// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};


console.log(`title: ${recipe.title} 
serves: ${recipe.serves}
ingredients:`);

recipe.ingredients.forEach(i => {console.log(i)})