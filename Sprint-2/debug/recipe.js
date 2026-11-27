// Predict and explain first...

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

// My prediction:
// This will log to the console something like
// "bruschetta serves 2 ingredients:{obj}"
// Because the ${recipe} doesn't access the ingredients
// just tries to log the object which will just state that it is an object indeed.

// Explanation:
// Almost correct, it logged:
// "bruschetta serves 2
//  ingredients:
// [object Object]"
//
// I was surprised at the line breaks until I remembered that in a template literal
// you don't have to write \n
//
// Next I will correct it by access first all values in the ingredients array at once
// And then I will access them individually on a new line for each.
// Then I will tidy the message a bit too

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(`Recipe for ${recipe.title}, serves ${recipe.serves}
Ingredients:
${recipe.ingredients[0]}
${recipe.ingredients[1]}
${recipe.ingredients[2]}
${recipe.ingredients[3]}`);
