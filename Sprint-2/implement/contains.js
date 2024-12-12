

// Check if the object is valid and has the property

function contains(obj, property) {
  if (typeof obj === "object" && obj !== null && property in obj) {
    return true;
  } else {
    return false;
  }
}


module.exports = contains;

//Check the Object: The function first checks if obj is an object and not null.
//Check the Property: It then checks if the property exists within the obj using the in operator.
//Return the Result: If both conditions are true, it returns true; otherwise, it returns false.

/*let x = 10;
let y = 5;

if (x > 5 && y < 10) {
  console.log("Both conditions are true.");
} else {
  console.log("At least one condition is false.");
}

let a = 0;
let b = 5;

if (a && b) {
  console.log("Both a and b are truthy.");
} else {
  console.log("At least one of a or b is falsy.");
}*/