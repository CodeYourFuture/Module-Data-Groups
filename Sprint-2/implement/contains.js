function contains(obj,searchString) {
// if given argument is object
    if (typeof obj === "object" && !Array.isArray(searchString))
    {
    
        return  (searchString in obj);
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

    let checking = contains(person,'age');
    console.log(checking);


module.exports = contains;
