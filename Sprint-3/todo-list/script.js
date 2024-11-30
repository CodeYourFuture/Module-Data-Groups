// Initial list of todos
const todos = [
  { text: "Wash the dishes", completed: false },
  { text: "Do the shopping", completed: false },
];

// Function to create and render the todo list
function populateTodoList() {
  const todoList = document.getElementById("todo-list");
  todoList.innerHTML = ""; // Clear existing list

  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.setAttribute("data-index", index);

    const span = document.createElement("span");
    span.classList.add("badge", "bg-primary", "rounded-pill");
    span.innerHTML = `
      <i class="fa fa-check" aria-hidden="true"></i>
      <i class="fa fa-trash" aria-hidden="true"></i>
    `;

    // Mark as completed or not
    if (todo.completed) {
      li.classList.add("completed");
      const checkIcon = span.querySelector(".fa-check");
      checkIcon.style.textDecoration = "line-through";
    }

    // Add the todo text and buttons
    const textNode = document.createTextNode(todo.text);
    li.appendChild(textNode);
    li.appendChild(span);

    // Mark as completed functionality
    span.querySelector(".fa-check").addEventListener("click", () => {
      todo.completed = !todo.completed;
      populateTodoList(); // Re-render the list
    });

    // Delete functionality
    span.querySelector(".fa-trash").addEventListener("click", () => {
      todos.splice(index, 1); // Remove todo from the array
      populateTodoList(); // Re-render the list
    });

    todoList.appendChild(li);
  });
}

// Add a new Todo
function addNewTodo(event) {
  event.preventDefault();
  const input = document.getElementById("todo-input");
  const newTodoText = input.value.trim();

  if (newTodoText) {
    todos.push({ text: newTodoText, completed: false });
    input.value = ""; // Clear input field
    populateTodoList(); // Re-render the list
  }
}

// Delete all completed todos
function deleteAllCompletedTodos() {
  const incompleteTodos = todos.filter((todo) => !todo.completed);
  todos.length = 0; // Clear the original todos array
  todos.push(...incompleteTodos); // Add back only incomplete todos
  populateTodoList(); // Re-render the list
}

// Add event listeners
document.getElementById("todo-form").addEventListener("submit", addNewTodo);
document
  .getElementById("remove-all-completed")
  .addEventListener("click", deleteAllCompletedTodos);

// Initial population of the todo list
populateTodoList();
