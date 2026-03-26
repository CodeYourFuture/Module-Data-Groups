// Predict and explain first...

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

// it should print the recipe title, how many people people it serves and lists the ingredients.

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(`${recipe.title} 
  serves ${recipe.serves}
  ingredients:
${recipe.ingredients.join("\n")}`);

// it printed [object Object], this is because ${recipe} tries to print the whole object, which shows as [object Object] instead of useful data. This was fixed by using ${recipe.ingredients} (and .join(", ")) to display the ingredients properly.
