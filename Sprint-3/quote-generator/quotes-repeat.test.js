const path = require("path");
const { JSDOM } = require("jsdom");

let page = null;

afterEach(() => {
  if (page) {
    page.window.close();
  }
  page = null;
  jest.restoreAllMocks();
});

test("does not repeat the displayed quote", async () => {
  page = await JSDOM.fromFile(path.join(__dirname, "index.html"), {
    resources: "usable",
    runScripts: "dangerously",
    beforeParse(window) {
      jest.spyOn(window.Math, "random").mockReturnValue(0.02);
    },
  });

  if (page.window.document.readyState !== "complete") {
    await new Promise((resolve) => {
      page.window.addEventListener("load", resolve, { once: true });
    });
  }

  const quote = page.window.document.querySelector("#quote");
  const author = page.window.document.querySelector("#author");
  const initialQuote =
    "Strive not to be a success, but rather to be of value.";
  const initialAuthor = "Albert Einstein";

  expect(quote).toHaveTextContent(initialQuote);
  expect(author).toHaveTextContent(initialAuthor);

  page.window.document.querySelector("#new-quote").click();

  expect(quote).toHaveTextContent(
    "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference."
  );
  expect(author).toHaveTextContent("Robert Frost");
});
