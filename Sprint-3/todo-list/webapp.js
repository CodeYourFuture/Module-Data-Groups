// Import the todos module
import * as Todos from "./todos.mjs";

// Initialize empty todo list
let todos = [];

// Wait for DOM to be fully loaded before accessing elements
document.addEventListener('DOMContentLoaded', () => {
  // DOM elements
  const taskInput = document.getElementById('taskInput');
  const deadlineInput = document.getElementById('deadlineInput');
  const addBtn = document.getElementById('addBtn');
  const todoListDiv = document.getElementById('todoList');

  // Check if elements exist to prevent errors
  if (!taskInput || !deadlineInput || !addBtn || !todoListDiv) {
    console.error('Required DOM elements not found');
    return;
  }

  // Function to format deadline for display
  function formatDeadline(deadline) {
    if (!deadline) return '';
    try {
      const deadlineDate = new Date(deadline);
      // Check if date is valid
      if (isNaN(deadlineDate.getTime())) {
        return ' (Invalid date)';
      }
      return ` (Due: ${deadlineDate.toLocaleString()})`;
    } catch (e) {
      return ' (Invalid date)';
    }
  }

  // Function to render the todo list to the page
  function renderTodos() {
    if (!todoListDiv) return;
    
    todoListDiv.innerHTML = '';
    
    if (todos.length === 0) {
      todoListDiv.innerHTML = '<p>No tasks yet. Add one above!</p>';
      return;
    }
    
    todos.forEach((todo, index) => {
      const todoDiv = document.createElement('div');
      todoDiv.className = 'todo-item';
      if (todo.completed) {
        todoDiv.classList.add('completed');
      }
      
      // Task text with deadline info
      const deadlineText = formatDeadline(todo.deadline);
      const taskText = document.createElement('span');
      taskText.innerHTML = `<strong>${escapeHtml(todo.task)}</strong>${deadlineText}`;
      
      // Toggle completed button
      const toggleBtn = document.createElement('button');
      toggleBtn.textContent = todo.completed ? '✓ Completed' : '○ Incomplete';
      toggleBtn.onclick = () => {
        Todos.toggleCompletedOnTask(todos, index);
        renderTodos(); // Re-render to show changes
      };
      
      // Delete button
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.onclick = () => {
        Todos.deleteTask(todos, index);
        renderTodos(); // Re-render to show changes
      };
      
      todoDiv.appendChild(taskText);
      todoDiv.appendChild(toggleBtn);
      todoDiv.appendChild(deleteBtn);
      todoListDiv.appendChild(todoDiv);
    });
  }

  // This added for security concern. Helper function to escape HTML to prevent XSS
  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  // Add task function (connects UI to the todos module)
  function addTaskFromUI() {
    if (!taskInput || !deadlineInput) return;
    
    const taskText = taskInput.value.trim();
    
    if (!taskText) {
      alert('Please enter a task description');
      return;
    }
    
    // Get deadline from input
    let deadline = null;
    if (deadlineInput.value) {
      deadline = deadlineInput.value;
    }
    
    // Call the addTask function with deadline
    Todos.addTask(todos, taskText, false, deadline);
    
    // Clear inputs
    taskInput.value = '';
    deadlineInput.value = '';
    
    // Re-render the updated list
    renderTodos();
  }

  // Event listeners
  addBtn.addEventListener('click', addTaskFromUI);
  taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      addTaskFromUI();
    }
  });

  // Initial render
  renderTodos();
});
