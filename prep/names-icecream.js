// function whichIceCreamsCanIEat(iceCreams) {
//   return iceCreams
//     .filter(
//       (iceCream) =>
//         iceCream.lactoseFree === true && iceCream.gramsOfSugarPerScoop < 10
//     )
//     .map((iceCream) => iceCream.flavour);
// }

//OR
function whichIceCreamsCanIEat(iceCreams) {
  const edibleFlavours = [];

  for (let i = 0; i < iceCreams.length; i++) {
    if (
      iceCreams[i].lactoseFree === true &&
      iceCreams[i].gramsOfSugarPerScoop < 10
    ) {
      edibleFlavours.push(iceCreams[i].flavour);
    }
  }

  return edibleFlavours;
}
test("given one edible ice cream, returns its flavour", () => {
  const input = [
    { flavour: "Coconut", lactoseFree: true, gramsOfSugarPerScoop: 8 },
  ];

  const currentOutput = whichIceCreamsCanIEat(input);
  const targetOutput = ["Coconut"];

  expect(currentOutput).toEqual(targetOutput);
});

const iceCream1 = {
  flavour: "Vanilla",
  lactoseFree: false,
  gramsOfSugarPerScoop: 12,
};

const iceCream2 = {
  flavour: "Mango Sorbet",
  lactoseFree: true,
  gramsOfSugarPerScoop: 10,
};

const iceCream3 = {
  flavour: "Coconut",
  lactoseFree: true,
  gramsOfSugarPerScoop: 8,
};

const iceCream4 = {
  flavour: "Strawberry",
  lactoseFree: false,
  gramsOfSugarPerScoop: 8,
};

const iceCream5 = {
  flavour: "Lemon Sorbet",
  lactoseFree: true,
  gramsOfSugarPerScoop: 7,
};

const allIceCreams = [iceCream1, iceCream2, iceCream3, iceCream4, iceCream5];

const iceCreamsICanEat = whichIceCreamsCanIEat(allIceCreams);
console.log(iceCreamsICanEat); // what should this output?