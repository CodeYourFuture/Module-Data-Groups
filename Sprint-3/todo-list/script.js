<<<<<<< HEAD
<<<<<<< HEAD
// Initial todos, some with deadlines
let todos = [
  { task: "Wash the dishes", completed: false, deadline: null },
  { task: "Do the shopping", completed: false, deadline: "2025-08-15" },
];

// DOM references
const todoList = document.getElementById("todo-list");
const todoInput = document.getElementById("todoInput");
const todoDeadline = document.getElementById("todoDeadline");
const todoForm = document.getElementById("todo-form");
const removeAllCompletedBtn = document.getElementById("remove-all-completed");

/**
 * Returns the number of days between today and deadline date (YYYY-MM-DD string)
 * If deadline is in the past, returns 0
 * @param {string} deadlineDate
 * @returns {number}
 */
function daysUntilDeadline(deadlineDate) {
  if (!deadlineDate) return null;
  const today = new Date();
  const deadline = new Date(deadlineDate + "T23:59:59"); // End of deadline day
  const diffTime = deadline - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays < 0 ? 0 : diffDays;
}

/**
 * Creates a todo list item <li> element with all info & event listeners
 * @param {Object} todo
 * @returns {HTMLElement}
 */
function createTodoElement(todo) {
  const li = document.createElement("li");

  if (todo.completed) {
    li.classList.add("completed");
  }

  // Container for task and deadline info
  const todoInfo = document.createElement("div");
  todoInfo.classList.add("todo-info");

  // Task text span
  const taskSpan = document.createElement("span");
  taskSpan.textContent = todo.task;
  taskSpan.classList.add("todo-task");
  todoInfo.appendChild(taskSpan);

  // Deadline or countdown span (if deadline exists)
  if (todo.deadline) {
    const countdownDays = daysUntilDeadline(todo.deadline);

    const deadlineSpan = document.createElement("span");

    if (countdownDays > 0) {
      deadlineSpan.textContent = `Deadline: ${todo.deadline} (${countdownDays} day${countdownDays === 1 ? '' : 's'} left)`;
      deadlineSpan.classList.add("countdown");
    } else {
      deadlineSpan.textContent = `Deadline: ${todo.deadline} (Today or overdue!)`;
      deadlineSpan.classList.add("countdown");
    }
    todoInfo.appendChild(deadlineSpan);
  }

  li.appendChild(todoInfo);

  // Badge container for icons
  const badge = document.createElement("span");
  badge.classList.add("badge");

  // Check icon to toggle completed
  const checkIcon = document.createElement("i");
  checkIcon.classList.add("fa", "fa-check");
  checkIcon.setAttribute("aria-label", "Toggle completed");
  checkIcon.setAttribute("role", "button");
  checkIcon.tabIndex = 0;
  checkIcon.addEventListener("click", () => {
    li.classList.toggle("completed");
    updateTodoCompletedStatus(todo.task, li.classList.contains("completed"));
  });
  checkIcon.addEventListener("keypress", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      checkIcon.click();
    }
  });

  // Trash icon to delete todo
  const trashIcon = document.createElement("i");
  trashIcon.classList.add("fa", "fa-trash");
  trashIcon.setAttribute("aria-label", "Delete todo");
  trashIcon.setAttribute("role", "button");
  trashIcon.tabIndex = 0;
  trashIcon.addEventListener("click", () => {
    todoList.removeChild(li);
    deleteTodoFromData(todo.task);
  });
  trashIcon.addEventListener("keypress", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      trashIcon.click();
    }
  });

  badge.appendChild(checkIcon);
  badge.appendChild(trashIcon);

  li.appendChild(badge);

  return li;
}

/**
 * Update the 'completed' status of the todo in the data array by task text.
 * @param {string} task
 * @param {boolean} completed
 */
function updateTodoCompletedStatus(task, completed) {
  const todo = todos.find((t) => t.task === task);
  if (todo) {
    todo.completed = completed;
  }
}

/**
 * Delete a todo from the data array by task text.
 * @param {string} task
 */
function deleteTodoFromData(task) {
  todos = todos.filter((t) => t.task !== task);
}

/**
 * Renders the todo list in the UI based on current data array.
 */
function populateTodoList() {
  todoList.innerHTML = "";
  todos.forEach((todo) => {
    const todoElement = createTodoElement(todo);
    todoList.appendChild(todoElement);
  });
}

/**
 * Handles form submission for adding new todo.
 * @param {Event} event
 */
function addNewTodo(event) {
  event.preventDefault();

  const task = todoInput.value.trim();
  if (task === "") return;

  const deadline = todoDeadline.value ? todoDeadline.value : null;

  // Prevent duplicates by task name
  if (todos.some((t) => t.task === task)) {
    alert("This todo already exists!");
    return;
  }

  const newTodo = { task, completed: false, deadline };
  todos.push(newTodo);

  const todoElement = createTodoElement(newTodo);
  todoList.appendChild(todoElement);

  todoInput.value = "";
  todoDeadline.value = "";
  todoInput.focus();
}

/**
 * Deletes all completed todos from data and re-renders UI.
 */
function deleteAllCompletedTodos() {
  todos = todos.filter((todo) => {
    // Remove todo if it is completed
    return !todo.completed;
  });
  populateTodoList();
}

// Initial render
populateTodoList();

// Event listeners
todoForm.addEventListener("submit", addNewTodo);
removeAllCompletedBtn.addEventListener("click", deleteAllCompletedTodos);
=======
// script.js

// Initial list of todos
let todos = [
  { task: "Wash the dishes", completed: false, deadline: null },
  { task: "Do the shopping", completed: false, deadline: "2025-08-15" },
];

// DOM references
const todoList = document.getElementById("todo-list");
const todoInput = document.getElementById("todoInput");
const todoDeadline = document.getElementById("todoDeadline");
const todoForm = document.getElementById("todo-form");
const removeAllCompletedBtn = document.getElementById("remove-all-completed");

/**
 * Returns the number of days between today and deadline date (YYYY-MM-DD string)
 * If deadline is in the past, returns 0
 * @param {string} deadlineDate
 * @returns {number}
 */
function daysUntilDeadline(deadlineDate) {
  if (!deadlineDate) return null;
  const today = new Date();
  const deadline = new Date(deadlineDate + "T23:59:59"); // End of deadline day
  const diffTime = deadline - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays < 0 ? 0 : diffDays;
}

/**
 * Creates a todo list item <li> element with all info & event listeners
 * @param {Object} todo
 * @returns {HTMLElement}
 */
function createTodoElement(todo) {
  const li = document.createElement("li");

  if (todo.completed) {
    li.classList.add("completed");
  }

  // Container for task and deadline info
  const todoInfo = document.createElement("div");
  todoInfo.classList.add("todo-info");

  // Task text span
  const taskSpan = document.createElement("span");
  taskSpan.textContent = todo.task;
  taskSpan.classList.add("todo-task");
  todoInfo.appendChild(taskSpan);

  // Deadline or countdown span (if deadline exists)
  if (todo.deadline) {
    const countdownDays = daysUntilDeadline(todo.deadline);

    const deadlineSpan = document.createElement("span");

    if (countdownDays > 0) {
      deadlineSpan.textContent = `Deadline: ${todo.deadline} (${countdownDays} day${countdownDays === 1 ? '' : 's'} left)`;
      deadlineSpan.classList.add("countdown");
    } else {
      deadlineSpan.textContent = `Deadline: ${todo.deadline} (Today or overdue!)`;
      deadlineSpan.classList.add("countdown");
    }
    todoInfo.appendChild(deadlineSpan);
  }

  li.appendChild(todoInfo);

  // Badge container for icons
  const badge = document.createElement("span");
  badge.classList.add("badge");

  // Check icon to toggle completed
  const checkIcon = document.createElement("i");
  checkIcon.classList.add("fa", "fa-check");
  checkIcon.setAttribute("aria-label", "Toggle completed");
  checkIcon.setAttribute("role", "button");
  checkIcon.tabIndex = 0;
  checkIcon.addEventListener("click", () => {
    li.classList.toggle("completed");
    updateTodoCompletedStatus(todo.task, li.classList.contains("completed"));
  });
  checkIcon.addEventListener("keypress", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      checkIcon.click();
    }
  });

  // Trash icon to delete todo
  const trashIcon = document.createElement("i");
  trashIcon.classList.add("fa", "fa-trash");
  trashIcon.setAttribute("aria-label", "Delete todo");
  trashIcon.setAttribute("role", "button");
  trashIcon.tabIndex = 0;
  trashIcon.addEventListener("click", () => {
    todoList.removeChild(li);
    deleteTodoFromData(todo.task);
  });
  trashIcon.addEventListener("keypress", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      trashIcon.click();
    }
  });

  badge.appendChild(checkIcon);
  badge.appendChild(trashIcon);

  li.appendChild(badge);

  return li;
}

/**
 * Update the 'completed' status of the todo in the data array by task text.
 * @param {string} task
 * @param {boolean} completed
 */
function updateTodoCompletedStatus(task, completed) {
  const todo = todos.find((t) => t.task === task);
  if (todo) {
    todo.completed = completed;
  }
}

/**
 * Delete a todo from the data array by task text.
 * @param {string} task
 */
function deleteTodoFromData(task) {
  todos = todos.filter((t) => t.task !== task);
}

/**
 * Renders the todo list in the UI based on current data array.
 */
function populateTodoList() {
  todoList.innerHTML = "";
  todos.forEach((todo) => {
    const todoElement = createTodoElement(todo);
    todoList.appendChild(todoElement);
  });
}

/**
 * Handles form submission for adding new todo.
 * @param {Event} event
 */
function addNewTodo(event) {
  event.preventDefault();

  const task = todoInput.value.trim();
  if (task === "") return;

  const deadline = todoDeadline.value ? todoDeadline.value : null;

  // Prevent duplicates by task name
  if (todos.some((t) => t.task === task)) {
    alert("This todo already exists!");
    return;
  }

  const newTodo = { task, completed: false, deadline };
  todos.push(newTodo);

  const todoElement = createTodoElement(newTodo);
  todoList.appendChild(todoElement);

  todoInput.value = "";
  todoDeadline.value = "";
  todoInput.focus();
}

/**
 * Deletes all completed todos from data and re-renders UI.
 */
function deleteAllCompletedTodos() {
  todos = todos.filter((todo) => {
    // Remove todo if it is completed
    return !todo.completed;
  });
  populateTodoList();
}

// Initial render
populateTodoList();

// Event listeners
todoForm.addEventListener("submit", addNewTodo);
removeAllCompletedBtn.addEventListener("click", deleteAllCompletedTodos);

// Initial population of list
populateTodoList(todos);
>>>>>>> 834c758 (update: fix codes to do lists and remove in todo-list/script.js)
=======
// script.js

// Initial list of todos
let todos = [
  { task: "Wash the dishes", completed: false, deadline: null },
  { task: "Do the shopping", completed: false, deadline: "2025-08-15" },
];

// DOM references
const todoList = document.getElementById("todo-list");
const todoInput = document.getElementById("todoInput");
const todoDeadline = document.getElementById("todoDeadline");
const todoForm = document.getElementById("todo-form");
const removeAllCompletedBtn = document.getElementById("remove-all-completed");

/**
 * Returns the number of days between today and deadline date (YYYY-MM-DD string)
 * If deadline is in the past, returns 0
 * @param {string} deadlineDate
 * @returns {number}
 */
function daysUntilDeadline(deadlineDate) {
  if (!deadlineDate) return null;
  const today = new Date();
  const deadline = new Date(deadlineDate + "T23:59:59"); // End of deadline day
  const diffTime = deadline - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays < 0 ? 0 : diffDays;
}

/**
 * Creates a todo list item <li> element with all info & event listeners
 * @param {Object} todo
 * @returns {HTMLElement}
 */
function createTodoElement(todo) {
  const li = document.createElement("li");

  if (todo.completed) {
    li.classList.add("completed");
  }

  // Container for task and deadline info
  const todoInfo = document.createElement("div");
  todoInfo.classList.add("todo-info");

  // Task text span
  const taskSpan = document.createElement("span");
  taskSpan.textContent = todo.task;
  taskSpan.classList.add("todo-task");
  todoInfo.appendChild(taskSpan);

  // Deadline or countdown span (if deadline exists)
  if (todo.deadline) {
    const countdownDays = daysUntilDeadline(todo.deadline);

    const deadlineSpan = document.createElement("span");

    if (countdownDays > 0) {
      deadlineSpan.textContent = `Deadline: ${todo.deadline} (${countdownDays} day${countdownDays === 1 ? '' : 's'} left)`;
      deadlineSpan.classList.add("countdown");
    } else {
      deadlineSpan.textContent = `Deadline: ${todo.deadline} (Today or overdue!)`;
      deadlineSpan.classList.add("countdown");
    }
    todoInfo.appendChild(deadlineSpan);
  }

  li.appendChild(todoInfo);

  // Badge container for icons
  const badge = document.createElement("span");
  badge.classList.add("badge");

  // Check icon to toggle completed
  const checkIcon = document.createElement("i");
  checkIcon.classList.add("fa", "fa-check");
  checkIcon.setAttribute("aria-label", "Toggle completed");
  checkIcon.setAttribute("role", "button");
  checkIcon.tabIndex = 0;
  checkIcon.addEventListener("click", () => {
    li.classList.toggle("completed");
    updateTodoCompletedStatus(todo.task, li.classList.contains("completed"));
  });
  checkIcon.addEventListener("keypress", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      checkIcon.click();
    }
  });

  // Trash icon to delete todo
  const trashIcon = document.createElement("i");
  trashIcon.classList.add("fa", "fa-trash");
  trashIcon.setAttribute("aria-label", "Delete todo");
  trashIcon.setAttribute("role", "button");
  trashIcon.tabIndex = 0;
  trashIcon.addEventListener("click", () => {
    todoList.removeChild(li);
    deleteTodoFromData(todo.task);
  });
  trashIcon.addEventListener("keypress", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      trashIcon.click();
    }
  });

  badge.appendChild(checkIcon);
  badge.appendChild(trashIcon);

  li.appendChild(badge);

  return li;
}

/**
 * Update the 'completed' status of the todo in the data array by task text.
 * @param {string} task
 * @param {boolean} completed
 */
function updateTodoCompletedStatus(task, completed) {
  const todo = todos.find((t) => t.task === task);
  if (todo) {
    todo.completed = completed;
  }
}

/**
 * Delete a todo from the data array by task text.
 * @param {string} task
 */
function deleteTodoFromData(task) {
  todos = todos.filter((t) => t.task !== task);
}

/**
 * Renders the todo list in the UI based on current data array.
 */
function populateTodoList() {
  todoList.innerHTML = "";
  todos.forEach((todo) => {
    const todoElement = createTodoElement(todo);
    todoList.appendChild(todoElement);
  });
}

/**
 * Handles form submission for adding new todo.
 * @param {Event} event
 */
function addNewTodo(event) {
  event.preventDefault();

  const task = todoInput.value.trim();
  if (task === "") return;

  const deadline = todoDeadline.value ? todoDeadline.value : null;

  // Prevent duplicates by task name
  if (todos.some((t) => t.task === task)) {
    alert("This todo already exists!");
    return;
  }

  const newTodo = { task, completed: false, deadline };
  todos.push(newTodo);

  const todoElement = createTodoElement(newTodo);
  todoList.appendChild(todoElement);

  todoInput.value = "";
  todoDeadline.value = "";
  todoInput.focus();
}

/**
 * Deletes all completed todos from data and re-renders UI.
 */
function deleteAllCompletedTodos() {
  todos = todos.filter((todo) => {
    // Remove todo if it is completed
    return !todo.completed;
  });
  populateTodoList();
}

// Initial render
populateTodoList();

// Event listeners
todoForm.addEventListener("submit", addNewTodo);
removeAllCompletedBtn.addEventListener("click", deleteAllCompletedTodos);

// Initial population of list
populateTodoList(todos);
>>>>>>> 834c758 (update: fix codes to do lists and remove in todo-list/script.js)
