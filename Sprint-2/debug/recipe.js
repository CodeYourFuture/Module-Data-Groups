  // Predict and explain first...
  // to separate the ingredients in different lines we need to use the function: join()
  // the ingredients is an array not an object, so we can use join() and pass "\n" to put
  // new line between every item.

  // This program should log out the title, how many it serves and the ingredients.
  // Each ingredient should be logged on a new line
  // How can you fix it?

  const recipe = {
    title: "bruschetta",
    serves: 2,
    ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
  };

  console.log(`Title: ${recipe.title} || serves: ${recipe.serves}
ingredients: \n ${recipe.ingredients.join("\n ")}`);
