function tally(items) {
  let countLetter = {};
  if (Array.isArray(items) === false) throw new Error("You must provide an item");
  else if (items.length === 0) return countLetter;
  else {
    items.forEach(letter => countLetter[letter] ? countLetter[letter]++ : countLetter[letter] = 1) 
    return countLetter;
  };
};

module.exports = tally;

console.log(tally(['a', 'a', 'a'])); // output: { a: 3 }
console.log(tally(['a', 'b', 'c'])); // output: { a: 1, b: 1, c: 1 }
console.log(tally([])); // output: {}
// console.log(tally('Hello')); // output: Throw Error "You must provide an item"