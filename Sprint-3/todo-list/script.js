function populateTodoList(todos) {
  const list = document.getElementById("todoList");
  list.innerHTML = "";

  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.className = "d-flex justify-content-between align-items-center mb-2";

    // Create span for task text
    const taskText = document.createElement("span");
    taskText.textContent = todo.task;
    taskText.className = "todo-text";
    if (todo.completed) {
      taskText.classList.add("text-decoration-line-through", "text-muted");
    }

    // Badge container with icons
    const badge = document.createElement("span");
    badge.className = "badge bg-primary rounded-pill d-flex gap-2 px-2 py-1";

    // Complete icon
    const checkIcon = document.createElement("i");
    checkIcon.className = "fa fa-check text-white";
    checkIcon.setAttribute("aria-hidden", "true");
    checkIcon.style.cursor = "pointer";
    checkIcon.addEventListener("click", () => {
      todo.completed = !todo.completed;
      populateTodoList(todos);
    });

    // Delete icon
    const trashIcon = document.createElement("i");
    trashIcon.className = "fa fa-trash text-white";
    trashIcon.setAttribute("aria-hidden", "true");
    trashIcon.style.cursor = "pointer";
    trashIcon.addEventListener("click", () => {
      todos.splice(index, 1);
      populateTodoList(todos);
    });

    badge.appendChild(checkIcon);
    badge.appendChild(trashIcon);

    li.appendChild(taskText);
    li.appendChild(badge);
    list.appendChild(li);
  });
}

// Initial todos array
let todos = [];

populateTodoList(todos);

// Add new todo handler
function addNewTodo(event) {
  event.preventDefault();
  const todoInput = document.getElementById("to-do");
  const newTodo = todoInput.value.trim();

  if (newTodo) {
    todos.push({ task: newTodo, completed: false });
    populateTodoList(todos);
    todoInput.value = "";
  }
}

document.getElementById("addToDo").addEventListener("click", addNewTodo);

// Remove all completed todos
function deleteAllCompletedTodos() {
  todos = todos.filter((todo) => !todo.completed);
  populateTodoList(todos);
}

document
  .getElementById("remove-all-completed")
  .addEventListener("click", deleteAllCompletedTodos);

