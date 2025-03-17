const punctuations = /[.,!?]/g;

function removePunctuation(str) {
  if (typeof str !== "string") {
    throw new Error("Param must be of type string");
  }

  return str.trim().replace(punctuations, "");
}

//console.log(removePunctuation(".hello"));

module.exports = removePunctuation;
