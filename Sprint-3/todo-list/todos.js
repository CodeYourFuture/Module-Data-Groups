// Add a new task
export function addTask(todos, task, completed) {
  todos.push({ task, completed });
}

// Delete a task by index
export function deleteTask(todos, index) {
  if (index < 0 || index >= todos.length) return;
  todos.splice(index, 1);
}

// Toggle completed status
export function toggleCompletedOnTask(todos, index) {
  if (index < 0 || index >= todos.length) return;
  todos[index].completed = !todos[index].completed;
}

// Delete all completed tasks
export function deleteCompleted(todos) {
  const remaining = todos.filter((todo) => !todo.completed);
  todos.length = 0;
  todos.push(...remaining);
}