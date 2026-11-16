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

// prediction: the above code prints:
// bruschetta
// serves 2
// ingredients:

//On a new line it prints:
// title: "bruschetta",
// serves: 2,
// ingredients: "olive oil", "tomatoes", "salt", "pepper"

// Explain: on line 15 recipe is missing .ingredients.
// As a result it will print the whole property of recipe object.
