const todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

function populateTodoList(todos) {
  const list = document.getElementById("todo-list");
  list.innerHTML = ""; 
  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.textContent = todo.task;
    li.style.textDecoration = todo.completed ? "line-through" : "none";

    // Toggle complete button
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "✔️";
    completeBtn.addEventListener("click", () => {
      todos[index].completed = !todos[index].completed;
      populateTodoList(todos);
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.addEventListener("click", () => {
      todos.splice(index, 1);
      populateTodoList(todos);
    });

    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);
    list.appendChild(li);
  });
}

function addNewTodo(event) {
  event.preventDefault();
   const input = document.getElementById("todo-input");
  const task = input.value.trim();

  if (task !== "") {
    todos.push({ task, completed: false });
    input.value = "";
    populateTodoList(todos);
  }
}

function deleteAllCompletedTodos() {
   const incompleteTodos = todos.filter((todo) => !todo.completed);
  todos.length = 0;
  todos.push(...incompleteTodos);
  populateTodoList(todos);
}
document.getElementById("todo-form").addEventListener("submit", addNewTodo);
document.getElementById("remove-all-completed").addEventListener("click", deleteAllCompletedTodos);

populateTodoList(todos);
