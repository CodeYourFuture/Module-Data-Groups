function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }

  // Adds percentage-encoded characters
  queryString = changePEC(queryString);

  // Replaces + with space
  queryString = queryString.replaceAll("+", " ");

  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    if (pair !== "") {
      let index = pair.indexOf("=");
      if (!pair.includes("=")) {
        index = pair.length;
      }
      const [key, value] = [pair.slice(0, index), pair.slice(index + 1)];
      queryParams[key] = value;
    }
  }

  return queryParams;
}

// this function below can have the object PEC expanded to include all percentage-encoded characters
// currently without adding this database, an unknown PEC could cause the code to get stuck in an infinite loop

function changePEC(string) {
  const PEC = { "%24": "$", "%2F": "/" };
  while (string.includes("%")) {
    const index = string.indexOf("%");
    const code = string.slice(index, index + 3);
    if (PEC[code]) {
      string = string.replace(code, PEC[code]);
    } else {
      break;
    }
  }
  return string;
}

module.exports = parseQueryString;
