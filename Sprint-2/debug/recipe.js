// Predict and explain first...

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

// it won't work because the last line is calling the object property recipe and we
// need the ingredientes, the console.log is trying to log the whole array of ingredients 
// as a string, but we want to log each ingredient on a new line. We can fix this by 
// using a for loop to iterate over the ingredients array and log each ingredient separately.

const recipe = {
  title: "Bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(`Recipe: ${recipe.title} \nserves: ${recipe.serves}`);
for(const ingredient of recipe.ingredients) {
  console.log(`${ingredient}`);
}


