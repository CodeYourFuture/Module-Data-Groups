// Predict and explain first...
/* In the console.log the {recipe} doesn't specify ingredients so it will 
show up as undefined. Changing it to {recipe.ingredients} should fix that issue. 
To log each ingredient on a new line you can use (.join("\n")) which
separate the code by line */


// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(`${recipe.title} 
  serves ${recipe.serves}
  ingredients: 
  ${recipe.ingredients.join("\n")}`);
