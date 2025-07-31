function populateTodoList(todos) {
  const list = document.getElementById("todo-list");
  list.innerHTML = "";

  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.className = "d-flex justify-content-between align-items-center mb-2";

    // Required by test: apply style directly to <li>
    if (todo.completed) {
      li.style.textDecoration = "line-through";
      li.style.color = "gray";
    } else {
      li.style.textDecoration = "none";
      li.style.color = "black";
    }

    const taskText = document.createElement("span");
    taskText.textContent = todo.task;
    taskText.className = "todo-text";

    const badge = document.createElement("span");
    badge.className = "badge bg-primary rounded-pill d-flex gap-2 px-2 py-1";

    const checkIcon = document.createElement("i");
    checkIcon.className = "fa fa-check text-white";
    checkIcon.setAttribute("aria-hidden", "true");
    checkIcon.style.cursor = "pointer";
    checkIcon.addEventListener("click", () => {
      todo.completed = !todo.completed;
      populateTodoList(todos);
    });

    const trashIcon = document.createElement("i");
    trashIcon.className = "fa fa-trash text-white";
    trashIcon.setAttribute("aria-hidden", "true");
    trashIcon.style.cursor = "pointer";
    trashIcon.addEventListener("click", () => {
      todos = todos.filter((t) => t !== todo);
      populateTodoList(todos);
    });

    badge.appendChild(checkIcon);
    badge.appendChild(trashIcon);

    li.appendChild(taskText);
    li.appendChild(badge);
    list.appendChild(li);
  });
}

let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false }
];

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  const input = document.getElementById("todoInput");
  const task = input.value.trim();

  if (task !== "") {
    todos.push({ task, completed: false });
    populateTodoList(todos);
    input.value = "";
  }
});

document
  .getElementById("remove-all-completed")
  .addEventListener("click", () => {
    todos = todos.filter((todo) => !todo.completed);
    populateTodoList(todos);
  });

populateTodoList(todos);
