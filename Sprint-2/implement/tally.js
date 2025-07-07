function tally(arrTally) {
  const objTally = {};
  if (!Array.isArray(arrTally)) {
    throw new Error("Input must be an array");
  }

  for (let value of arrTally) {
    if (objTally[value]) {
      objTally[value] += 1;
    } else {
      objTally[value] = 1;
    }
  }

  return objTally;
}

module.exports = tally;
const arrTally = [];
console.log(tally(arrTally));
// test("tally with duplicate items", () => {
//   expect(tally(["a", "a", "b", "c"])).toEqual({ a: 2, b: 1, c: 1 });
// });
