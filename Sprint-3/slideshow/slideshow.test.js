/* ======= TESTS - DO NOT MODIFY ===== 
There are some Tests in this file that will help you work out if your code is working.
*/

const path = require("path");
const { JSDOM } = require("jsdom");

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

describe("Level 1 challenge", () => {
  test("renders the first image with control buttons", () => {
    const images = [
      "./assets/cute-cat-a.png",
      "./assets/cute-cat-b.jpg",
      "./assets/cute-cat-c.jpg",
    ];
    const image = page.window.document.querySelector("#carousel-img");
    const forwardBtn = page.window.document.querySelector("#forward-btn");
    const backwardBtn = page.window.document.querySelector("#backward-btn");

    expect(image).toHaveAttribute("src", images[0]);
    expect(forwardBtn).toBeInTheDocument();
    expect(backwardBtn).toBeInTheDocument();
  });
  test("can move the image forwards once", () => {
    const images = [
      "./assets/cute-cat-a.png",
      "./assets/cute-cat-b.jpg",
      "./assets/cute-cat-c.jpg",
    ];
    const image = page.window.document.querySelector("#carousel-img");
    const forwardBtn = page.window.document.querySelector("#forward-btn");

    expect(image).toHaveAttribute("src", images[0]);

    forwardBtn.click();

    expect(image).toHaveAttribute("src", images[1]);
  });

  test("can move the image forwards multiple times", () => {
    const images = [
      "./assets/cute-cat-a.png",
      "./assets/cute-cat-b.jpg",
      "./assets/cute-cat-c.jpg",
    ];
    const image = page.window.document.querySelector("#carousel-img");
    const forwardBtn = page.window.document.querySelector("#forward-btn");

    forwardBtn.click();
    forwardBtn.click();

    expect(image).toHaveAttribute("src", images[2]);
  });

  test("can move the image backwards to the end", () => {
    const images = [
      "./assets/cute-cat-a.png",
      "./assets/cute-cat-b.jpg",
      "./assets/cute-cat-c.jpg",
    ];
    const image = page.window.document.querySelector("#carousel-img");
    const backwardBtn = page.window.document.querySelector("#backward-btn");

    expect(image).toHaveAttribute("src", images[0]);

    backwardBtn.click();

    expect(image).toHaveAttribute("src", images[2]);
  });

  test("can move the image backwards multiple times", () => {
    const images = [
      "./assets/cute-cat-a.png",
      "./assets/cute-cat-b.jpg",
      "./assets/cute-cat-c.jpg",
    ];
    const image = page.window.document.querySelector("#carousel-img");
    const backwardBtn = page.window.document.querySelector("#backward-btn");
    expect(image).toHaveAttribute("src", images[0]);

    backwardBtn.click();
    backwardBtn.click();

    expect(image).toHaveAttribute("src", images[1]);
  });

  test("moving forwards will eventually wrap around to the start", () => {
    const images = [
      "./assets/cute-cat-a.png",
      "./assets/cute-cat-b.jpg",
      "./assets/cute-cat-c.jpg",
    ];
    const image = page.window.document.querySelector("#carousel-img");
    const forwardBtn = page.window.document.querySelector("#forward-btn");

    expect(image).toHaveAttribute("src", images[0]);

    forwardBtn.click();
    forwardBtn.click();
    forwardBtn.click();

    expect(image).toHaveAttribute("src", images[0]);
  });
});

describe("Level 2 challenge", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  afterEach(() => {
    jest.useRealTimers();
  });
  test("can start moving images forward automatically", () => {
    const images = [
      "./assets/cute-cat-a.png",
      "./assets/cute-cat-b.jpg",
      "./assets/cute-cat-c.jpg",
    ];
    const image = page.window.document.querySelector("#carousel-img");
    const autoForwardBtn = page.window.document.querySelector("#auto-forward");
    const autoBackBtn = page.window.document.querySelector("#auto-backward");
    const interval = 2000;

    expect(image).toHaveAttribute("src", images[0]);

    autoForwardBtn.click();

    expect(autoForwardBtn).toBeDisabled();
    expect(autoBackBtn).toBeDisabled();

    jest.advanceTimersByTime(interval);
    expect(image).toHaveAttribute("src", images[1]);

    jest.advanceTimersByTime(interval);
    expect(image).toHaveAttribute("src", images[2]);

    jest.advanceTimersByTime(interval);
    expect(image).toHaveAttribute("src", images[0]);
  });
  test("can start moving images backward automatically", () => {
    const images = [
      "./assets/cute-cat-a.png",
      "./assets/cute-cat-b.jpg",
      "./assets/cute-cat-c.jpg",
    ];
    const image = page.window.document.querySelector("#carousel-img");
    const autoForwardBtn = page.window.document.querySelector("#auto-forward");
    const autoBackBtn = page.window.document.querySelector("#auto-backward");
    const interval = 2000;

    expect(image).toHaveAttribute("src", images[0]);

    autoBackBtn.click();

    expect(autoForwardBtn).toBeDisabled();
    expect(autoBackBtn).toBeDisabled();

    jest.advanceTimersByTime(interval);
    expect(image).toHaveAttribute("src", images[2]);

    jest.advanceTimersByTime(interval);
    expect(image).toHaveAttribute("src", images[1]);

    jest.advanceTimersByTime(interval);
    expect(image).toHaveAttribute("src", images[0]);
  });
  test("can stop the automatic timer", () => {
    const images = [
      "./assets/cute-cat-a.png",
      "./assets/cute-cat-b.jpg",
      "./assets/cute-cat-c.jpg",
    ];
    const image = page.window.document.querySelector("#carousel-img");
    const autoForwardBtn = page.window.document.querySelector("#auto-forward");
    const autoBackBtn = page.window.document.querySelector("#auto-backward");
    const stopBtn = page.window.document.querySelector("#stop");
    const interval = 2000;

    expect(image).toHaveAttribute("src", images[0]);

    autoForwardBtn.click();

    expect(autoForwardBtn).toBeDisabled();
    expect(autoBackBtn).toBeDisabled();

    jest.advanceTimersByTime(interval);
    expect(image).toHaveAttribute("src", images[1]);

    jest.advanceTimersByTime(interval);
    expect(image).toHaveAttribute("src", images[2]);

    stopBtn.click();

    expect(autoForwardBtn).toBeEnabled();
    expect(autoBackBtn).toBeEnabled();

    jest.runOnlyPendingTimers();
    expect(image).toHaveAttribute("src", images[2]);
  });
});
