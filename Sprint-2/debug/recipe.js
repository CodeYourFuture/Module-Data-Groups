// Predict and explain first...

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


// 〰️ When the code logs ${recipe}, JavaScript converts the entire object into a string using its default toString() method, which returns [object Object].
// 〰️ This happens because JavaScript doesn't know how to format the object automatically.
// 〰️ Additionally, the code doesn't iterate over the ingredients array, so the list isn't displayed properly.

// 〰️ We can fix it to use recipe.ingredients.join("\n") to join the ingredients with new lines, ensuring each appears on its own line.

// 〰️ recipe.ingredients.join("\n") converts the array into a string with each ingredient on a new line, creating a clean and readable output.