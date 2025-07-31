const path = require("path");
const { JSDOM } = require("jsdom");
const { default: userEvent } = require("@testing-library/user-event");
const { console } = require("inspector");

let page = null;

beforeEach(async () => {
  page = await JSDOM.fromFile(path.join(__dirname, "index.html"), {
    resources: "usable",
    runScripts: "dangerously",
  });

  // do this so students can use element.innerText which jsdom does not implement
  Object.defineProperty(page.window.HTMLElement.prototype, "innerText", {
    get() {
      return this.textContent;
    },
    set(value) {
      this.textContent = value;
    },
  });

  return new Promise((res) => {
    page.window.document.addEventListener("load", res);
  });
});

afterEach(() => {
  page = null;
});

describe("Reading list", () => {
  test("renders a list of books with author and title", () => {
    const readingList = page.window.document.querySelector("#reading-list");

    expect(readingList).toHaveTextContent("The Design of Everyday Things");
    expect(readingList).toHaveTextContent("Don Norman".toUpperCase());

    expect(readingList).toHaveTextContent("The Most Human Human");
    expect(readingList).toHaveTextContent("Brian Christian".toUpperCase());

    expect(readingList).toHaveTextContent("The Pragmatic Programmer");
    expect(readingList).toHaveTextContent("Andrew Hunt".toUpperCase());
  });
  test("each book in the list has an image", () => {
    const firstChildImage = page.window.document.querySelector(
      "#reading-list > li:first-child img"
    );

    
    expect(firstChildImage).toHaveAttribute(
      "src",
    "https://blackwells.co.uk/jacket/l/9780465050659.jpg"
    );
    expect(firstChildImage).toHaveAttribute("alt", "The Design of Everyday Things");

  });
  test("background color changes depending on whether book has been read", () => {
    const secondChild = page.window.document.querySelector(
      "#reading-list > :first-child"
    );
    expect(secondChild).toHaveStyle({ backgroundColor: "rgb(245, 43, 43)" });

    const secondLi = page.window.document.querySelector(
      "#reading-list > :nth-child(2)"
    );
    expect(secondLi).toHaveStyle({ backgroundColor: "lightgreen" });

    const thirdLi = page.window.document.querySelector(
      "#reading-list > :nth-child(3)"
    );
    expect(thirdLi).toHaveStyle({ backgroundColor: "lightgreen" });
  });
});
