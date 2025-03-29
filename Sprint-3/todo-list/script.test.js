const path = require("path");
const { JSDOM } = require("jsdom");
const { default: userEvent } = require("@testing-library/user-event");

let page = null;

beforeEach(async () => {
  page = await JSDOM.fromFile(path.join(__dirname, "index.html"), {
    resources: "usable",
    runScripts: "dangerously",
  });

  // Ensure scripts have finished executing before running tests
  await new Promise((resolve) => {
    if (page.window.document.readyState === "complete") {
      resolve();
    } else {
      page.window.addEventListener("load", resolve);
    }
  });

  Object.defineProperty(page.window.HTMLElement.prototype, "innerText", {
    get() {
      return this.textContent;
    },
    set(value) {
      this.textContent = value;
    },
  });
});

afterEach(() => {
  page = null;
});

describe("Todo List App", () => {
  test("displays the initial list of todos", () => {
    const todoList = page.window.document.querySelector("#todo-list");
    const listItems = [...todoList.querySelectorAll("li")];

    expect(todoList).toHaveTextContent("Wash the dishes");
    expect(todoList).toHaveTextContent("Do the shopping");
    expect(listItems.length).toBe(2);
  });

  test("each todo has a delete button and a checkbox for completion", () => {
    const listItems = [
      ...page.window.document.querySelectorAll("#todo-list li"),
    ];

    listItems.forEach((li) => {
      const checkbox = li.querySelector("input[type='checkbox']");
      const deleteButton = li.querySelector("button i.fa-trash");

      expect(checkbox).toBeTruthy();
      expect(deleteButton).toBeTruthy();
    });
  });

  test("can add a new todo to the list", async () => {
    const todoList = page.window.document.querySelector("#todo-list");
    const input = page.window.document.querySelector("#todoInput");
    const button = page.window.document.querySelector("#todo-btn");

    userEvent.type(input, "Do CYF coursework");
    await userEvent.click(button);

    expect(todoList).toHaveTextContent("Do CYF coursework");

    const listItems = [...todoList.querySelectorAll("li")];
    expect(listItems.length).toBe(3);
  });

  test("can strike through a todo when it is completed", async () => {
    const checkbox = page.window.document.querySelector(
      "#todo-list li input[type='checkbox']"
    );
    const li = checkbox.closest("li");

    await userEvent.click(checkbox);

    expect(li.style.textDecoration).toBe("line-through");
  });

  test("can undo a strikethrough on a todo", async () => {
    const checkbox = page.window.document.querySelector(
      "#todo-list li input[type='checkbox']"
    );
    const li = checkbox.closest("li");

    await userEvent.click(checkbox);
    expect(li.style.textDecoration).toBe("line-through");

    await userEvent.click(checkbox);
    expect(li.style.textDecoration).toBe("none");
  });

  test("can delete a todo from the list", async () => {
    const todoList = page.window.document.querySelector("#todo-list");
    const deleteButton = page.window.document.querySelector(
      "#todo-list li button i.fa-trash"
    );

    await userEvent.click(deleteButton);

    const listItems = [...todoList.querySelectorAll("li")];
    expect(listItems.length).toBe(1); // Should reduce to 1 todo
  });

  test("can remove all completed todos", async () => {
    const todoList = page.window.document.querySelector("#todo-list");
    const removeCompletedButton = page.window.document.querySelector(
      "#remove-all-completed"
    );

    // Complete a task
    const checkboxes = [...todoList.querySelectorAll("input[type='checkbox']")];
    await userEvent.click(checkboxes[0]); // Strike through first todo

    // Remove completed todos
    await userEvent.click(removeCompletedButton);

    const listItems = [...todoList.querySelectorAll("li")];
    expect(listItems.length).toBe(1);
  });
});

// const path = require("path");
// const { JSDOM } = require("jsdom");
// const { default: userEvent } = require("@testing-library/user-event");

// let page = null;

// beforeEach(async () => {
//   page = await JSDOM.fromFile(path.join(__dirname, "index.html"), {
//     resources: "usable",
//     runScripts: "dangerously",
//   });

//   // do this so students can use element.innerText which jsdom does not implement
//   Object.defineProperty(page.window.HTMLElement.prototype, "innerText", {
//     get() {
//       return this.textContent;
//     },
//     set(value) {
//       this.textContent = value;
//     },
//   });

//   return new Promise((res) => {
//     page.window.document.addEventListener("load", () => {
//       const { populateTodoList } = require(path.join(__dirname, "script.js"));
//       const todos = [
//         { task: "Wash the dishes", completed: false },
//         { task: "Do the shopping", completed: false },
//       ];
//       populateTodoList(todos);
//       res();
//     });
//   });
// });

// afterEach(() => {
//   page = null;
// });

// describe("Mandatory tasks", () => {
//   test("displays the initial list of todos", () => {
//     const todoList = page.window.document.querySelector("#todo-list");
//     const listItems = [...page.window.document.querySelectorAll("li")];

//     expect(todoList).toHaveTextContent("Wash the dishes");
//     expect(todoList).toHaveTextContent("Do the shopping");
//     expect(listItems.length).toBe(2);
//   });

//   test("each todo has a delete and tick icon", () => {
//     const listItems = [...page.window.document.querySelectorAll("li")];

//     listItems.forEach((_, index) => {
//       const tickIcon = page.window.document.querySelector(
//         `li:nth-child(${index + 1}) i.fa-check`
//       );
//       const binIcon = page.window.document.querySelector(
//         `li:nth-child(${index + 1}) i.fa-trash`
//       );

//       expect(tickIcon).toBeInTheDocument();
//       expect(binIcon).toBeInTheDocument();
//     });
//   });

//   test("can add a new todo to the list", () => {
//     const todoList = page.window.document.querySelector("#todo-list");
//     const button = page.window.document.querySelector(".btn");
//     const input = page.window.document.querySelector("#todoInput");
//     const todoText = "Do CYF coursework";

//     userEvent.type(input, todoText);
//     userEvent.click(button);

//     expect(todoList).toHaveTextContent(todoText);

//     const listItems = [...page.window.document.querySelectorAll("li")];
//     expect(listItems.length).toBe(3);
//   });

//   test("can strike through a todo when it is completed", () => {
//     const li = page.window.document.querySelector("li");
//     const tickIcon = page.window.document.querySelector("li i");

//     userEvent.click(tickIcon);

//     expect(li).toHaveStyle({
//       textDecoration: "line-through",
//     });
//   });

//   test("can undo a strikethrough on a todo", () => {
//     const li = page.window.document.querySelector("li");
//     const tickIcon = page.window.document.querySelector("li i");
//     userEvent.click(tickIcon);

//     expect(li).toHaveStyle({
//       textDecoration: "line-through",
//     });

//     userEvent.click(tickIcon);

//     expect(li).not.toHaveStyle({
//       textDecoration: "line-through",
//     });
//   });

//   test("can delete a todo from the list", () => {
//     const todoList = page.window.document.querySelector("#todo-list");
//     const button = page.window.document.querySelector(".btn");
//     const input = page.window.document.querySelector("#todoInput");
//     const todoText = "Do CYF coursework";

//     userEvent.type(input, todoText);
//     userEvent.click(button);

//     expect(todoList).toHaveTextContent(todoText);
//     const listItems = [...page.window.document.querySelectorAll("li")];
//     expect(listItems.length).toBe(3);

//     const binIcon = page.window.document.querySelector(
//       "li:nth-child(3) i.fa-trash"
//     );
//     userEvent.click(binIcon);

//     expect(todoList).not.toHaveTextContent(todoText);
//   });
// });

// describe("Advanced tasks", () => {
//   test("can remove all completed todos", () => {
//     const todoList = page.window.document.querySelector("#todo-list");
//     const button = page.window.document.querySelector(".btn");
//     const input = page.window.document.querySelector("#todoInput");

//     userEvent.type(input, "Do CYF coursework");
//     userEvent.click(button);

//     userEvent.clear(input);
//     userEvent.type(input, "Make a sandwich");
//     userEvent.click(button);

//     userEvent.clear(input);
//     userEvent.type(input, "Take a break");
//     userEvent.click(button);

//     const tickIcon2 = page.window.document.querySelector(
//       "li:nth-child(2) i.fa-check"
//     );
//     userEvent.click(tickIcon2);
//     const tickIcon4 = page.window.document.querySelector(
//       "li:nth-child(4) i.fa-check"
//     );
//     userEvent.click(tickIcon4);

//     const removeAllCompletedButton = page.window.document.querySelector(
//       "#remove-all-completed"
//     );
//     userEvent.click(removeAllCompletedButton);

//     const listItems = [...page.window.document.querySelectorAll("li")];
//     expect(listItems.length).toBe(3);
//     expect(todoList).toHaveTextContent("Wash the dishes");
//     expect(todoList).toHaveTextContent("Do CYF coursework");
//     expect(todoList).toHaveTextContent("Take a break");

//     expect(todoList).not.toHaveTextContent("Do the shopping");
//     expect(todoList).not.toHaveTextContent("Make a sandwich");
//   });
// });
