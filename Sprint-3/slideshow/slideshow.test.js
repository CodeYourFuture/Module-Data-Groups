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
      "./images/puppy1.jpg",
      "./images/puppy2.jpg",
      "./images/puppy3.jpg",
      "./images/puppy4.jpg",
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
      "./images/puppy1.jpg",
      "./images/puppy2.jpg",
      "./images/puppy3.jpg",
      "./images/puppy4.jpg",
    ];
    const image = page.window.document.querySelector("#carousel-img");
    const forwardBtn = page.window.document.querySelector("#forward-btn");

    expect(image).toHaveAttribute("src", images[0]);

    userEvent.click(forwardBtn);

    expect(image).toHaveAttribute("src", images[1]);
  });

  test("can move the image forwards multiple times", () => {
    const images = [
      "./images/puppy1.jpg",
      "./images/puppy2.jpg",
      "./images/puppy3.jpg",
      "./images/puppy4.jpg",
    ];
    const image = page.window.document.querySelector("#carousel-img");
    const forwardBtn = page.window.document.querySelector("#forward-btn");

    userEvent.click(forwardBtn);
    userEvent.click(forwardBtn);

    expect(image).toHaveAttribute("src", images[2]);
  });

  test("can move the image forwards to the last image", () => {
    const images = [
      "./images/puppy1.jpg",
      "./images/puppy2.jpg",
      "./images/puppy3.jpg",
      "./images/puppy4.jpg",
    ];
    const image = page.window.document.querySelector("#carousel-img");
    const forwardBtn = page.window.document.querySelector("#forward-btn");

    userEvent.click(forwardBtn);
    userEvent.click(forwardBtn);
    userEvent.click(forwardBtn);

    expect(image).toHaveAttribute("src", images[3]);
  });

  test("moving forwards will eventually wrap around to the start", () => {
    const images = [
      "./images/puppy1.jpg",
      "./images/puppy2.jpg",
      "./images/puppy3.jpg",
      "./images/puppy4.jpg",
    ];
    const image = page.window.document.querySelector("#carousel-img");
    const forwardBtn = page.window.document.querySelector("#forward-btn");

    expect(image).toHaveAttribute("src", images[0]);

    userEvent.click(forwardBtn);
    userEvent.click(forwardBtn);
    userEvent.click(forwardBtn);
    userEvent.click(forwardBtn);

    expect(image).toHaveAttribute("src", images[0]);
  });

  test("can move the image backwards to the last image", () => {
    const images = [
      "./images/puppy1.jpg",
      "./images/puppy2.jpg",
      "./images/puppy3.jpg",
      "./images/puppy4.jpg",
    ];
    const image = page.window.document.querySelector("#carousel-img");
    const backwardBtn = page.window.document.querySelector("#backward-btn");

    expect(image).toHaveAttribute("src", images[0]);

    userEvent.click(backwardBtn);

    expect(image).toHaveAttribute("src", images[3]);
  });

  test("can move the image backwards multiple times", () => {
    const images = [
      "./images/puppy1.jpg",
      "./images/puppy2.jpg",
      "./images/puppy3.jpg",
      "./images/puppy4.jpg",
    ];
    const image = page.window.document.querySelector("#carousel-img");
    const backwardBtn = page.window.document.querySelector("#backward-btn");

    userEvent.click(backwardBtn);
    userEvent.click(backwardBtn);

    expect(image).toHaveAttribute("src", images[2]);
  });

  test("moving backwards will eventually wrap around to the start", () => {
    const images = [
      "./images/puppy1.jpg",
      "./images/puppy2.jpg",
      "./images/puppy3.jpg",
      "./images/puppy4.jpg",
    ];
    const image = page.window.document.querySelector("#carousel-img");
    const backwardBtn = page.window.document.querySelector("#backward-btn");

    expect(image).toHaveAttribute("src", images[0]);

    userEvent.click(backwardBtn);
    userEvent.click(backwardBtn);
    userEvent.click(backwardBtn);
    userEvent.click(backwardBtn);

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
      "./images/puppy1.jpg",
      "./images/puppy2.jpg",
      "./images/puppy3.jpg",
      "./images/puppy4.jpg",
    ];
    const image = page.window.document.querySelector("#carousel-img");
    const autoForwardBtn = page.window.document.querySelector("#auto-forward");
    const autoBackBtn = page.window.document.querySelector("#auto-backward");
    const interval = 2000;

    expect(image).toHaveAttribute("src", images[0]);

    userEvent.click(autoForwardBtn);

    expect(autoForwardBtn).toBeDisabled();
    expect(autoBackBtn).toBeDisabled();

    jest.advanceTimersByTime(interval);
    expect(image).toHaveAttribute("src", images[1]);

    jest.advanceTimersByTime(interval);
    expect(image).toHaveAttribute("src", images[2]);

    jest.advanceTimersByTime(interval);
    expect(image).toHaveAttribute("src", images[3]);

    jest.advanceTimersByTime(interval);
    expect(image).toHaveAttribute("src", images[0]);
  });

  test("can start moving images backward automatically", () => {
    const images = [
      "./images/puppy1.jpg",
      "./images/puppy2.jpg",
      "./images/puppy3.jpg",
      "./images/puppy4.jpg",
    ];
    const image = page.window.document.querySelector("#carousel-img");
    const autoForwardBtn = page.window.document.querySelector("#auto-forward");
    const autoBackBtn = page.window.document.querySelector("#auto-backward");
    const interval = 2000;

    expect(image).toHaveAttribute("src", images[0]);

    userEvent.click(autoBackBtn);

    expect(autoForwardBtn).toBeDisabled();
    expect(autoBackBtn).toBeDisabled();

    jest.advanceTimersByTime(interval);
    expect(image).toHaveAttribute("src", images[3]);

    jest.advanceTimersByTime(interval);
    expect(image).toHaveAttribute("src", images[2]);

    jest.advanceTimersByTime(interval);
    expect(image).toHaveAttribute("src", images[1]);

    jest.advanceTimersByTime(interval);
    expect(image).toHaveAttribute("src", images[0]);
  });

  test("can stop the automatic timer", () => {
    const images = [
      "./images/puppy1.jpg",
      "./images/puppy2.jpg",
      "./images/puppy3.jpg",
      "./images/puppy4.jpg",
    ];
    const image = page.window.document.querySelector("#carousel-img");
    const autoForwardBtn = page.window.document.querySelector("#auto-forward");
    const autoBackBtn = page.window.document.querySelector("#auto-backward");
    const stopBtn = page.window.document.querySelector("#stop");
    const interval = 2000;

    expect(image).toHaveAttribute("src", images[0]);

    userEvent.click(autoForwardBtn);

    expect(autoForwardBtn).toBeDisabled();
    expect(autoBackBtn).toBeDisabled();

    jest.advanceTimersByTime(interval);
    expect(image).toHaveAttribute("src", images[1]);

    jest.advanceTimersByTime(interval);
    expect(image).toHaveAttribute("src", images[2]);

    userEvent.click(stopBtn);

    expect(autoForwardBtn).toBeEnabled();
    expect(autoBackBtn).toBeEnabled();

    jest.runOnlyPendingTimers();
    expect(image).toHaveAttribute("src", images[2]);
  });

  test("clicking forward or backward while auto-advancing stops auto mode", () => {
  const images = [
    "./images/puppy1.jpg",
    "./images/puppy2.jpg",
    "./images/puppy3.jpg",
    "./images/puppy4.jpg",
  ];
  const image = page.window.document.querySelector("#carousel-img");
  const autoForwardBtn = page.window.document.querySelector("#auto-forward");
  const autoBackBtn = page.window.document.querySelector("#auto-backward");
  const forwardBtn = page.window.document.querySelector("#forward-btn");
  const backwardBtn = page.window.document.querySelector("#backward-btn");
  const interval = 2000;

  // Start auto-forward
  userEvent.click(autoForwardBtn);
  expect(autoForwardBtn).toBeDisabled();
  expect(autoBackBtn).toBeDisabled();

  // It advances once
  jest.advanceTimersByTime(interval);
  expect(image).toHaveAttribute("src", images[1]);

  // Manual forward should STOP auto
  userEvent.click(forwardBtn);
  expect(autoForwardBtn).toBeEnabled();
  expect(autoBackBtn).toBeEnabled();

  // Time passes, but image no longer auto-advances
  jest.advanceTimersByTime(interval * 2);
  expect(image).toHaveAttribute("src", images[2]);

  // Start auto-backward, then stop via manual backward
  userEvent.click(autoBackBtn);
  jest.advanceTimersByTime(interval);
  expect(image).toHaveAttribute("src", images[1]);

  userEvent.click(backwardBtn); // stops auto again
  jest.advanceTimersByTime(interval);
  expect(image).toHaveAttribute("src", images[0]);

  // Cleanup pending timers in this test
  jest.runOnlyPendingTimers();
  });
  
});