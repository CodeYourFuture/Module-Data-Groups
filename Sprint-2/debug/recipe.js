// Predict and explain first...

// Here we have nested object, to be precise array under key ingredients.
// To get access to array we use dot notation with ingredients key. But each ingredient
// should be on a separate line. That mean that we need loop through this array.

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(`${recipe.title} serves ${recipe.serves}
    ingredients: `);
for (const ingredient of recipe.ingredients) {
  console.log(`${ingredient}`);
}

// console.log(`${recipe.title} serves ${recipe.serves}
// ingredients:
// ${ingredient}`);
