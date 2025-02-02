export function createTodoElement(todo, index) {

    const todoElement = document.createElement('div');
    todoElement.classList.add('todo');
    todoElement.setAttribute("data-id", index);

    const todoContent = document.createElement('div');
    todoContent.classList.add('todo-content');

    const title = document.createElement('p');
    title.classList.add('todo-title');
    title.textContent = todo.title

    const description = document.createElement('p');
    description.classList.add('todo-description', 'hidden');
    description.textContent = todo.description;

    const due = document.createElement('p');
    due.classList.add('todo-due');
    due.textContent = todo.dueDate;

    const priority = document.createElement('p');
    priority.classList.add('todo-priority', 'hidden');
    priority.textContent = todo.priority;

    const completed = document.createElement('p');
    completed.classList.add('todo-completed');
    completed.textContent = todo.completed;

    todoContent.appendChild(title);
    todoContent.appendChild(description);
    todoContent.appendChild(due);
    todoContent.appendChild(priority);
    todoContent.appendChild(completed);

    todoElement.appendChild(todoContent);

    addTodoButtons.toggleTodo(todoElement);
    addTodoButtons.editTodo(todoElement);
    addTodoButtons.deleteTodo(todoElement);

    return todoElement;
}

const addTodoButtons = (() => {

    const deleteTodo = (todoElement) => {

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-todo');
        deleteButton.textContent = "Delete todo";
        todoElement.appendChild(deleteButton);
    }

    const toggleTodo = (completed) => {
        const toggleButton = document.createElement('button');
        toggleButton.classList.add('toggle-todo');
        toggleButton.textContent = "Mark complete";
        completed.appendChild(toggleButton);
    }

    const editTodo = (todoElement) => {
        const editButton = document.createElement('button');
        editButton.classList.add('edit-todo');
        editButton.textContent = 'Edit todo';
        todoElement.appendChild(editButton);
    }

    return {
        deleteTodo,
        toggleTodo,
        editTodo
    }
})();