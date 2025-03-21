function contains(o,s) {
// if given argument is object
if (typeof o === "object" && !Array.isArray(o))
{
   
    return  (s in o);
}
else
{
    throw new Error ("The input is not an object");
}

}



const person = {
    name : "ricardo",
    age : 22
};

const hobbies = ["football","read"];

const favourite = {};

let checking = contains(favourite);
console.log(checking);


module.exports = contains;
