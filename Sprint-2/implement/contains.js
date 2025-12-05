function isObject(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function contains(obj, prop) {
    if(!isObject(obj)) throw  new Error ("Invalid input");
    
 // return Object.keys(obj).includes(prop);
 return Object.hasOwn(obj, prop);
}

 console.log( contains({ a: 1, b: 2 }, 'toString'));
module.exports = contains;


//Does the following function call returns what you expect?

 // contains({a: 1, b: 2}, 'toString');
// returns false for inherited properties


//How to determine if an object's property is its own property or an inherited property in JavaScript?
// by using hasown method.

//Does your test correctly check whether the function can detect the given object is an array?
//Yes, the test correctly checks that the function can detect when the input is an array.
//it("throws an error when the first parameter is not an object",()=>{
 //       expect(()=> contains([],"a")).toThrow("Invalid input")
 //   });