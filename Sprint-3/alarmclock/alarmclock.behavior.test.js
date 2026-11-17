const path = require("path");
const { JSDOM } = require("jsdom");

let page = null;

beforeEach(async () => {
  page = await JSDOM.fromFile(path.join(__dirname, "index.html"), {
    resources: "usable",
    runScripts: "dangerously",
  });

  jest.useFakeTimers();

  Object.defineProperty(page.window.HTMLElement.prototype, "innerText", {
    get() {
      return this.textContent;
    },
    set(value) {
      this.textContent = value;
    },
  });

  return new Promise((resolve) => {
    page.window.document.addEventListener("load", resolve);
  });
});

afterEach(() => {
  jest.useRealTimers();
  page = null;
});

test("shows the entered time in minutes and seconds", () => {
  const heading = page.window.document.querySelector("#timeRemaining");
  const input = page.window.document.querySelector("#alarmSet");

  input.value = "19";
  page.window.document.querySelector("#set").click();
  expect(heading).toHaveTextContent("Time Remaining: 00:19");

  input.value = "119";
  page.window.document.querySelector("#set").click();
  expect(heading).toHaveTextContent("Time Remaining: 01:59");
});
