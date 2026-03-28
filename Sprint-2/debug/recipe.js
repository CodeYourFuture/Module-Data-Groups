// Predict and explain first...

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line

// Create an object that holds recipe details
const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

// Log the title and how many it serves
console.log(`${recipe.title} serves ${recipe.serves}`);

// Log each ingredient on a new line using a loop
for (const ingredient of recipe.ingredients) {
  console.log(ingredient);
}

/*
## Brief Explanation

- recipe.ingredients is an array (a numbered list) containing four items.
- for...of works on arrays, so it goes through each item one by one.
- Each time through the loop, the variable ingredient holds the current item, and console.log prints it on its own line.

## How to Test
node recipe.js

Expected output:
bruschetta serves 2
olive oil
tomatoes
salt
pepper
*/
