function parseQueryString(queryString) {
  if (queryString === "") {
    return {};
  } else {
    queryString = decodeURIComponent(queryString)
      .replace(/\+/g, " ")
      .replace(/&&/g, "&")
      .replace(/&+$/, "");

    const splitByAnds = queryString.split("&");

    const splitByEquals = splitByAnds.map(x => {
      const parts = x.split("=", 2);
      return parts.length === 1 ? [parts[0], ""] : parts;
    });

    return Object.fromEntries(splitByEquals);
  }
}
  // const queryParams = {};
  // if (queryString.length === 0) {
  //   return queryParams;
  // }
  // const keyValuePairs = queryString.split("&");

  // for (const pair of keyValuePairs) {
  //   const [key, value] = pair.split("=");
  //   queryParams[key] = value;
  // }

  // return queryParams;
}

module.exports = parseQueryString;
