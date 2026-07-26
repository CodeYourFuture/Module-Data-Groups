// Predict and explain first...

//The program will not display the ingredients correctly. Instead, it will show something like:
//bruschetta serves 2
//ingredients:
//[object Object]

//The issue is that `recipe` is an object. JavaScript cannot display the whole object inside a string, so it shows `[object Object]`. You need to access the specific values you want, like the ingredients array, and format them separately.


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
${recipe.ingredients.join("\n")}`);