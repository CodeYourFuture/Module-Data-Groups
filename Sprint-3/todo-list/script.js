function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  // Clear existing todos in the list
  list.innerHTML = "";

  // Iterate over todos array to create each todo item in the list
  todos.forEach(({ task, completed }) => {
    const li = document.createElement("li");
    li.textContent = task;

    // If todo is completed, add line-through style
    if (completed) {
      li.style.textDecoration = "line-through";
    }

    // Create span for action buttons (check and trash icons)
    const span = document.createElement("span");
    span.className = "badge bg-primary rounded-pill";

    // Create check icon for toggling completed state
    const checkIcon = document.createElement("i");
    checkIcon.className = "fa fa-check";
    checkIcon.setAttribute("aria-hidden", "true");
    checkIcon.addEventListener("click", () => {
      if (li.style.textDecoration === "line-through") {
        li.style.textDecoration = "none";
      } else {
        li.style.textDecoration = "line-through";
      }
    });

    // Create trash icon for deleting the todo
    const trashIcon = document.createElement("i");
    trashIcon.className = "fa fa-trash";
    trashIcon.setAttribute("aria-hidden", "true");
    trashIcon.addEventListener("click", () => {
      li.remove();
    });

    // Append icons to span and span to li
    span.appendChild(checkIcon);
    span.appendChild(trashIcon);
    li.appendChild(span);

    // Append the todo li to the list
    list.appendChild(li);
  });
}

// Initial todos
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

// Add new todo when form is submitted
function addNewTodo(event) {
  event.preventDefault();

  // Get the input element using correct id matching your HTML
  const todoInput = document.getElementById("todoInput");
  const taskText = todoInput.value.trim();

  // Prevent adding empty todos
  if (taskText === "") {
    alert("Please enter a todo task.");
    return;
  }

  // Create new todo elements
  const list = document.getElementById("todo-list");
  const li = document.createElement("li");
  li.textContent = taskText;

  // Create span for buttons
  const span = document.createElement("span");
  span.className = "badge bg-primary rounded-pill";

  // Create check icon for toggling completed state
  const checkIcon = document.createElement("i");
  checkIcon.className = "fa fa-check";
  checkIcon.setAttribute("aria-hidden", "true");
  checkIcon.addEventListener("click", () => {
    if (li.style.textDecoration === "line-through") {
      li.style.textDecoration = "none";
    } else {
      li.style.textDecoration = "line-through";
    }
  });

  // Create trash icon for deleting the todo
  const trashIcon = document.createElement("i");
  trashIcon.className = "fa fa-trash";
  trashIcon.setAttribute("aria-hidden", "true");
  trashIcon.addEventListener("click", () => {
    li.remove();
  });

  // Append icons to span and span to li
  span.appendChild(checkIcon);
  span.appendChild(trashIcon);
  li.appendChild(span);

  // Append new todo li to the list
  list.appendChild(li);

  // Clear input field after adding todo
  todoInput.value = "";
}

// Delete all completed todos
function deleteAllCompletedTodos() {
  const list = document.getElementById("todo-list");
  const listItems = Array.from(list.children);

  listItems.forEach((li) => {
    if (li.style.textDecoration === "line-through") {
      li.remove();
    }
  });
}

// Add event listeners to the form and button
document.querySelector("form").addEventListener("submit", addNewTodo);
document
  .getElementById("remove-all-completed")
  .addEventListener("click", deleteAllCompletedTodos);
