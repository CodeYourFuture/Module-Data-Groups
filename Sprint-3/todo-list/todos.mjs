/*
  A ToDo List (todos) is expected to be represented as an array of objects in 
  the following manner:

  [
    { task: "Description of task 1", completed: false},
    { task: "Description of task 2", completed: true}
  ]

*/

// Append a new task to todos[]
export function addTask(todos, task, completed = false, deadline = null) {
  todos.push({ task, completed, deadline });
}

// Delete todos[taskIndex] if it exists
export function deleteTask(todos, taskIndex) {
  if (todos[taskIndex]) {
    todos.splice(taskIndex, 1);
  }
}

// Toggle the "completed" property of todos[taskIndex] if the task exists.
export function toggleCompletedOnTask(todos, taskIndex) {
  if (todos[taskIndex]) {
    todos[taskIndex].completed = !todos[taskIndex].completed;
  }
}

// Delete all completed Tasks from given list
export function deleteCompleted(todoList) {
  let notCompleted = todoList.filter((task) => !task.completed);
  if (todoList.length > 0 && todoList.some((task) => task.completed)) {
    todoList.splice(0, todoList.length, ...notCompleted);
  }
}
