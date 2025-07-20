const path = require("path");
const { JSDOM } = require("jsdom");
const { default: userEvent } = require("@testing-library/user-event");

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
    expect(readingList).toHaveTextContent("Don Norman");

    expect(readingList).toHaveTextContent("The Most Human Human");
    expect(readingList).toHaveTextContent("Brian Christian");

    expect(readingList).toHaveTextContent("The Pragmatic Programmer");
    expect(readingList).toHaveTextContent("Andrew Hunt");
  });
test("each book in the list has an image", () => {
    const firstLi = page.window.document.querySelector(
      "#reading-list > :first-child"
    );
    
    const firstBookImage = firstLi.querySelector("img");

    expect(firstBookImage).not.toBeNull(); 
    expect(firstBookImage.src).toBe("https://blackwells.co.uk/jacket/l/9780465050659.jpg"); 
    expect(firstBookImage.alt).toBe("The Design of Everyday Things cover"); 
    expect(firstBookImage).toHaveClass("book-cover"); 


    const secondLi = page.window.document.querySelector(
      "#reading-list > :nth-child(2)"
    );
    const secondBookImage = secondLi.querySelector("img");
    expect(secondBookImage).not.toBeNull();
    expect(secondBookImage.src).toBe("https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg");
    expect(secondBookImage.alt).toBe("The Most Human Human cover");


    const thirdLi = page.window.document.querySelector(
      "#reading-list > :nth-child(3)"
    );
    const thirdBookImage = thirdLi.querySelector("img");
    expect(thirdBookImage).not.toBeNull();
    expect(thirdBookImage.src).toBe("https://blackwells.co.uk/jacket/l/9780135957059.jpg");
    expect(thirdBookImage.alt).toBe("The Pragmatic Programmer cover");
  });
  test("background color changes depending on whether book has been read", () => {
    const firstLi = page.window.document.querySelector(
      "#reading-list > :first-child"
    );
    expect(firstLi).toHaveStyle({ backgroundColor: "red" });

    const secondLi = page.window.document.querySelector(
      "#reading-list > :nth-child(2)"
    );
    expect(secondLi).toHaveStyle({ backgroundColor: "green" });

    const thirdLi = page.window.document.querySelector(
      "#reading-list > :nth-child(3)"
    );
    expect(thirdLi).toHaveStyle({ backgroundColor: "green" });
  });
});
