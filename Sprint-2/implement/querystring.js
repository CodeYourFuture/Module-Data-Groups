function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }

  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    if (pair === "") {
      continue;
    }
    const pairWithoutAdd = pair.replace(/\+/g, " ");
    const indexOfEqual = pairWithoutAdd.indexOf("=");

    let keyVal;
    let val;

    if (indexOfEqual === -1) {
      keyVal = pairWithoutAdd;
      val = "";
    } else {
      keyVal = pairWithoutAdd.slice(0, indexOfEqual);
      val = pairWithoutAdd.slice(indexOfEqual + 1);
    }
    keyVal = decodeURIComponent(keyVal);
    val = decodeURIComponent(val);

    if (Object.hasOwn(queryParams, keyVal)) {
      if (!Array.isArray(queryParams[keyVal])) {
        queryParams[keyVal] = [queryParams[keyVal]];
      }
      queryParams[keyVal].push(val);
    } else {
      queryParams[keyVal] = val;
    }
  }

  return queryParams;
}

module.exports = parseQueryString;

/*
let a = { color: "red" };
a.color = [a.color];
console.log(a);*/
