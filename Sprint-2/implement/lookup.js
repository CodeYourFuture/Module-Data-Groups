function createLookup(countryCurrencyPairs) {
  if (
    !Array.isArray(countryCurrencyPairs) ||
    !countryCurrencyPairs.every(
      (item) =>
        Array.isArray(item) &&
        item.every((element) => typeof element === "string")
    )
  ) {
    throw new Error("createLookup requires array of an array");
  }

  let currencyObject = {};
  for (const arrayCurrency of countryCurrencyPairs) {
    currencyObject[arrayCurrency[0]] = arrayCurrency[1];
  }
  return currencyObject;
}
/*console.log(
  createLookup([
    ["US", "USD"],
    ["CA", "CAD"],
  ])
);*/
module.exports = createLookup;
