// Predict and explain first...
// we should add new line `\n` between ingredients to log them on a new line.

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

// Here we add `join("\n") to the ingredients array to log each ingredient in a new line.
console.log(
  `${recipe.title} serves ${
    recipe.serves
  } ingredients: ${recipe.ingredients.join("\n")}`
);

//console.log(`${recipe.title} serves ${recipe.serves}
// ingredients:
//${recipe}`);
