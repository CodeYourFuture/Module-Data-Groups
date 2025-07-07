// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

//recognize if the count of list items is odd or even.return true for odd and false for even 

function calculateMedian(list) {
  
  if (Array.isArray(list)){
    let listCopy = list.filter((num) => typeof num === "number");
   
    if (listCopy.length == 0) {
        return null;
    }else{
      listCopy = listCopy.sort((a,b) => a-b);

      if (listCopy.length % 2 == 0) {
        const mid1 = listCopy[listCopy.length / 2 - 1];
        const mid2 = listCopy[listCopy.length / 2];
        return (mid1 + mid2) / 2;
      } else {
        const middleIndex = Math.floor(listCopy.length / 2);
        return listCopy[middleIndex];
      }
      }
     }
    else {
      return null;
    }
  }


module.exports = calculateMedian;
