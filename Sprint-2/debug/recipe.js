// Predict and explain first...

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"]
};

console.log(`${recipe.title} serves ${recipe.serves}
//   ingredients:
//  ${recipe.ingredients.join("\n")}`);
 //

   //OR
//recipe.ingredients.forEach(ingredient => console.log(ingredient));


 //.join ==> converts array in to a string. 

 //("\n") ==>  this is called new line character which is used  to make sure the ingredients are 
// listed in a new line instead of separated by commas.