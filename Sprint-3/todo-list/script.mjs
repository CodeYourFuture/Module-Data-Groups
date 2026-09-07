// Store everything imported from './todos.mjs' module as properties of an object named Todos
import * as Todos from "./todos.mjs";

// To store the todo tasks
const todos = [];

// Set up tasks to be performed once on page load
window.addEventListener("load", () => {
  document.getElementById("add-task-btn").addEventListener("click", addNewTodo);

  // Populate sample data
  Todos.addTask(todos, "Wash the dishes", false);
  Todos.addTask(todos, "Do the shopping", true);

  render();
});

// Delete completed tasks
document
  .getElementById("delete-completed-btn")
  .addEventListener("click", deleteCompletedTodos);

function deleteCompletedTodos() {
  Todos.deleteCompleted(todos);
  render();
}

// A callback that reads the task description from an input field and
// append a new task to the todo list.
function addNewTodo() {
  const taskInput = document.getElementById("new-task-input");
  const deadlineInput = document.getElementById("new-task-deadline");
  const task = taskInput.value.trim();
  const deadline = deadlineInput.value || null;
  if (task) {
    Todos.addTask(todos, task, false, deadline);
    render();
  }

  taskInput.value = "";
  deadlineInput.value = "";
}

// Note:
// - Store the reference to the <ul> element with id "todo-list" here
//   to avoid querying the DOM repeatedly inside render().
// - This variable is declared here to be close to the only function that uses it.
const todoListEl = document.getElementById("todo-list");

// Render the whole todo list
function render() {
  todoListEl.innerHTML = "";

  todos.forEach((todo, index) => {
    const todoListItem = createListItem(todo, index);
    todoListEl.append(todoListItem);
  });
}

// Note:
// - First child of #todo-item-template is a <li> element.
//   We will create each ToDo list item as a clone of this node.
// - This variable is declared here to be close to the only function that uses it.
const todoListItemTemplate =
  document.getElementById("todo-item-template").content.firstElementChild;

// Create a <li> element for the given todo task
function createListItem(todo, index) {
  const li = todoListItemTemplate.cloneNode(true); // true => Do a deep copy of the node

  li.querySelector(".description").textContent = todo.task;

  const deadlineBadge = li.querySelector(".deadline-badge");
  const deadlineDate = li.querySelector(".deadline-date");
  const icon = deadlineBadge ? deadlineBadge.querySelector("i") : null;
  if (todo.deadline) {
    const diffDays = Todos.getDaysRemaining(todo.deadline);

    // Clear existing styling classes from deadlineBadge (keep 'deadline-badge')
    deadlineBadge.className = "deadline-badge";

    // Clear icon classes
    if (icon) {
      icon.className = "";
    }
    diff;
    if (diffDays < 0) {
      deadlineBadge.classList.add("overdue");
      const overdueDays = Math.abs(diffDays);
      deadlineDate.textContent = `Deadline: ${overdueDays} ${overdueDays === 1 ? "day" : "days"} overdue`;
      if (icon) icon.className = "fa-solid fa-triangle-exclamation";
    } else if (diffDays === 0) {
      deadlineBadge.classList.add("due-today");
      deadlineDate.textContent = "Deadline: Due today";
      if (icon) icon.className = "fa-solid fa-clock";
    } else if (diffDays === 1) {
      deadlineBadge.classList.add("due-tomorrow");
      deadlineDate.textContent = "Deadline: Due tomorrow";
      if (icon) icon.className = "fa-solid fa-hourglass-half";
    } else {
      deadlineBadge.classList.add("due-future");
      deadlineDate.textContent = `Deadline: ${diffDays} days left`;
      if (icon) icon.className = "fa-regular fa-calendar-days";
    }
  } else {
    if (deadlineBadge) {
      deadlineBadge.remove();
    }
  }

  if (todo.completed) {
    li.classList.add("completed");
  }

  li.querySelector(".complete-btn").addEventListener("click", () => {
    Todos.toggleCompletedOnTask(todos, index);
    render();
  });

  li.querySelector(".delete-btn").addEventListener("click", () => {
    Todos.deleteTask(todos, index);
    render();
  });

  return li;
}
