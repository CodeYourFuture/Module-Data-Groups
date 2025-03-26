// Predict and explain first...
//Ans : it will return bruschetta ,serves 2 and object . The 1st & 2nd values are called with keys and last one is called whole object .

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

//console.log(`${recipe.title} serves ${recipe.serves}
//  ingredients:
//${recipe}`);

// loop through the object 

for (const item in recipe)
{
  // if the value is array print line by line
  if (Array.isArray(recipe[item]))
  {
    console.log(item);
    // loop through array to print out each value
    for (let i in recipe[item])
    {
      console.log(recipe.ingredients[i]);
    }
  }
  else
  {
    console.log(item+ ":" +recipe[item]);
  }
}