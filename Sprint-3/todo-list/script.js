const todoInput = document.getElementById('todoInput');
const addButton = document.querySelector('.btn');
const todoList = document.getElementById('todo-list');
const removeCompletedButton = document.getElementById('remove-all-completed');

addButton.addEventListener('click', () => {
    const todoText = todoInput.value.trim();
    if (todoText) {
        const li = document.createElement('li');
        li.innerHTML = `
            ${todoText}
            <div>
                <i class="fa fa-check"></i>
                <i class="fa fa-trash"></i>
            </div>
        `;
        todoList.appendChild(li);
        todoInput.value = '';
    }
});
/*
todoList.addEventListener('click', (event) => {
    if (event.target.classList.contains('fa-check')) {
        const li = event.target.parentElement.parentElement;
        li.classList.toggle('completed');
    } else if (event.target.classList.contains('fa-trash')) {
        event.target.parentElement.parentElement.remove();
    }
});
*/
todoList.addEventListener('click', (event) => {
    if (event.target.classList.contains('fa-check')) {
        const li = event.target.closest('li'); // Use closest to find the parent li
        if (li) {
            li.classList.toggle('completed');
        }
    } else if (event.target.classList.contains('fa-trash')) {
        const li = event.target.closest('li'); // Use closest to find the parent li
        if (li) {
            li.remove();
        }
    }
});

removeCompletedButton.addEventListener('click', () => {
    const completedItems = document.querySelectorAll('li.completed');
    completedItems.forEach(item => item.remove());
});