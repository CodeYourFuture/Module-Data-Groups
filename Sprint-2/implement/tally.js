    function tally(items) {
        
        if (!Array.isArray(items)) {
          throw new Error("Input must be an array");
        }
    
        const counts = {};
        items.forEach(element => {
          if (counts[element]) {
            counts[element]++;
          } else {
            counts[element] = 1;
          }
        });
        return counts;
      }
      
      console.log(tally(['a']));  // { a: 1 }
      console.log(tally(['a', 'a', 'a']));  // { a: 3 }
      console.log(tally(['a', 'a', 'b', 'c']));  // { a: 2, b: 1, c: 1 }
      console.log(tally([]));  // {}



module.exports = tally;
