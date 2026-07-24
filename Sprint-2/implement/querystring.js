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
      const match = x.match(/^([^=]*)(?:=(.*))?$/);

      const key = match[1];
      const value = match[2] ?? "";

      return [key, value];
    });

    return Object.fromEntries(splitByEquals);
  }
}

module.exports = parseQueryString;
