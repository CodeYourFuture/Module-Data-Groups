/* ======= TESTS - DO NOT MODIFY ===== 
There are some Tests in this file that will help you work out if your code is working.
*/
const path = require("path");
const { JSDOM } = require("jsdom");
const { default: userEvent } = require("@testing-library/user-event");

let page = null;

beforeEach(async () => {
  page = await JSDOM.fromFile(path.join(__dirname, "index.html"), {
    resources: "usable",
    runScripts: "dangerously",
  });

  // Implement innerText for compatibility with testing
  Object.defineProperty(page.window.HTMLElement.prototype, "innerText", {
    get() {
      return this.textContent;
    },
    set(value) {
      this.textContent = value;
    },
  });

  // Mock Math.random to return predictable values for testing
  jest
    .spyOn(page.window.Math, "random")
    .mockReturnValueOnce(0.02) // Albert Einstein quote (index 2)
    .mockReturnValueOnce(0.25) // Maya Angelou quote (index 25)
    .mockReturnValueOnce(0.79); // Rosa Parks quote (index 80)

  return new Promise((resolve) => {
    page.window.document.addEventListener("load", resolve);
  });
});

afterEach(() => {
  page = null;
  jest.restoreAllMocks();
});

describe("Quote generator", () => {
  test("initially displays quote and author", async () => {
    const quoteP = page.window.document.querySelector("#quote");
    const authorP = page.window.document.querySelector("#author");

    // Wait for DOM to populate if necessary
    await new Promise((resolve) => setTimeout(resolve, 300));

    expect(quoteP).toHaveTextContent(
      "Strive not to be a success, but rather to be of value."
    );
    expect(authorP).toHaveTextContent("Albert Einstein");
  });

  test("can change quote to another random quote", async () => {
    const quoteP = page.window.document.querySelector("#quote");
    const authorP = page.window.document.querySelector("#author");
    const newQuoteBtn = page.window.document.querySelector("#new-quote");

    // Initial state
    expect(quoteP).toHaveTextContent(
      "Strive not to be a success, but rather to be of value."
    );
    expect(authorP).toHaveTextContent("Albert Einstein");

    // Click to change quote
    userEvent.click(newQuoteBtn);

    // Wait for DOM to update
    await new Promise((resolve) => setTimeout(resolve, 300));

    expect(quoteP).toHaveTextContent(
      "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel."
    );
    expect(authorP).toHaveTextContent("Maya Angelou");

    // Click again to change quote
    userEvent.click(newQuoteBtn);

    await new Promise((resolve) => setTimeout(resolve, 300));

    expect(quoteP).toHaveTextContent(
      "I have learned over the years that when one's mind is made up, this diminishes fear."
    );
    expect(authorP).toHaveTextContent("Rosa Parks");
  });
});
