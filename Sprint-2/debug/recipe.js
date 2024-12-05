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
//   ingredients:// the issue is here, the recipe object is being inserted in the string, but since it is an object it will be converted to a string
// ${recipe}`);// to correct the code we can use .forEach() method
console.log(`${recipe.title} serves ${recipe.serves}`);
console.log("ingredients:");
recipe.ingredients.forEach(ingredient =>{//loop for each item in the ingredients array 
  console.log(ingredient);// inside the loop it will log each ingredient on a new line
});

  
