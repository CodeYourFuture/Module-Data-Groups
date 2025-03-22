function tally(strArray) {

// if the input argument is array calculate the count else throw an error.

if (Array.isArray(strArray))
{  
// creating a new empty object 
    const countChar = {};

// if the string have value calculate the count else return an empty object 
    if (strArray.length >0)
    {

        // loop through the array 
            for (const i of strArray)
            {
                // if the value from array is already inside the object add to there else assign as 1
                if (countChar.hasOwnProperty(i))
                {
                    countChar[i] += 1;
                }
                else
                {
                    countChar[i] = 1
                }

                
            }    
            return countChar;
    }

    else
    {
        return countChar;
    }
 }
 else 
 {
    throw new Error ('The input value should be array');
 }
}

let exString = ['a','a','b']
console.log (tally(exString));

let empString = [];
console.log (tally(empString));

//let name = "CYF"
//console.log(tally(name));

module.exports = tally;
