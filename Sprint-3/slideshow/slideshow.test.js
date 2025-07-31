// slideshow.test.js
const path = require("path");
const { JSDOM } = require("jsdom");
const userEvent = require("@testing-library/user-event").default;

let page, window, document;

beforeEach(async () => {
  page = await JSDOM.fromFile(path.join(__dirname, "index.html"), {
    runScripts: "dangerously",
    resources: "usable",
    pretendToBeVisual: true,
  });

  window = page.window;
  document = window.document;

  Object.defineProperty(window.HTMLElement.prototype, "innerText", {
    get() {
      return this.textContent;
    },
    set(value) {
      this.textContent = value;
    },
  });

  return new Promise((resolve) => {
    window.addEventListener("load", resolve);
  });
});

afterEach(() => {
  page = null;
  window = null;
  document = null;
});

const images = [
  "./assets/cute-cat-a.png",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
];

describe("Level 1 challenge", () => {
  test("renders the first image with control buttons", () => {
    const image = document.querySelector("#carousel-img");
    expect(image).not.toBeNull();
    expect(image.src).toContain(images[0].replace("./", ""));

    expect(document.querySelector("#forward-btn")).not.toBeNull();
    expect(document.querySelector("#backward-btn")).not.toBeNull();
  });

  test("can move forward", async () => {
    const image = document.querySelector("#carousel-img");
    const forwardBtn = document.querySelector("#forward-btn");

    await userEvent.click(forwardBtn);
    expect(image.src).toContain(images[1].replace("./", ""));
  });

  test("can wrap forward", async () => {
    const image = document.querySelector("#carousel-img");
    const forwardBtn = document.querySelector("#forward-btn");

    await userEvent.click(forwardBtn);
    await userEvent.click(forwardBtn);
    await userEvent.click(forwardBtn);

    expect(image.src).toContain(images[0].replace("./", ""));
  });

  test("can move backward", async () => {
    const image = document.querySelector("#carousel-img");
    const backBtn = document.querySelector("#backward-btn");

    await userEvent.click(backBtn);
    expect(image.src).toContain(images[2].replace("./", ""));
  });
});

describe("Level 2 challenge", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test("auto-forward advances images", async () => {
    const image = document.querySelector("#carousel-img");
    const autoForwardBtn = document.querySelector("#auto-forward");

    await userEvent.click(autoForwardBtn);
    jest.advanceTimersByTime(2000);

    expect(image.src).toContain(images[1].replace("./", ""));
  });

  test("stop auto-forward", async () => {
    const image = document.querySelector("#carousel-img");
    const autoForwardBtn = document.querySelector("#auto-forward");
    const stopBtn = document.querySelector("#stop");

    await userEvent.click(autoForwardBtn);
    jest.advanceTimersByTime(2000);

    await userEvent.click(stopBtn);
    jest.advanceTimersByTime(2000);

    expect(image.src).toContain(images[1].replace("./", ""));
  });
});
