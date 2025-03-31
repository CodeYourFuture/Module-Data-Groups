let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

function populateTodoList() {
  let list = document.getElementById("todo-list");
  list.innerHTML = ""; // Clear existing list

  todos.forEach((todo, index) => {
    let li = document.createElement("li");
    li.id = `todo-${index}`;

    let taskSpan = document.createElement("span");
    taskSpan.textContent = todo.task;
    if (todo.completed) {
      taskSpan.classList.add("completed");
    }
    li.appendChild(taskSpan);

    let completeBtn = document.createElement("button");
    completeBtn.textContent = "✓";
    completeBtn.addEventListener("click", () => toggleComplete(index));
    li.appendChild(completeBtn);

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑️";
    deleteBtn.addEventListener("click", () => deleteTodo(index));
    li.appendChild(deleteBtn);

    list.appendChild(li);
  });
}

function toggleComplete(index) {
  todos[index].completed = !todos[index].completed;
  populateTodoList();
}

function deleteTodo(index) {
  todos.splice(index, 1);
  populateTodoList();
}

function addNewTodo(event) {
  event.preventDefault();
  let taskInput = document.getElementById("todoInput").value.trim();
  if (taskInput) {
    todos.push({ task: taskInput, completed: false });
    populateTodoList();
    document.getElementById("todoInput").value = "";
  }
}

function deleteAllCompletedTodos() {
  todos = todos.filter(todo => !todo.completed);
  populateTodoList();
}

// Initialize the todo list
populateTodoList();

// Add event listeners
document.getElementById("todo-form").addEventListener("submit", addNewTodo);
document.getElementById("remove-all-completed").addEventListener("click", deleteAllCompletedTodos);
