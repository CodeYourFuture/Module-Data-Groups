// Predict and explain first...

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

// console.log(`${recipe.title} serves ${recipe.serves}
//   ingredients:
// ${recipe}`);

// you're inserting the whole object directly into a string.
// JavaScript will coerce it to [object Object].


console.log(`${recipe.title} serves ${recipe.serves}`);
console.log("ingredients:");
recipe.ingredients.forEach((ingredient) => {
  console.log(ingredient);
});
