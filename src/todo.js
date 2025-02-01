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
    description.classList.add('todo-description');
    description.textContent = todo.description;

    const due = document.createElement('p');
    due.classList.add('todo-due');
    due.textContent = todo.dueDate;

    const priority = document.createElement('p');
    priority.classList.add('todo-priority');
    priority.textContent = todo.priority;

    todoContent.appendChild(title);
    todoContent.appendChild(description);
    todoContent.appendChild(due);
    todoContent.appendChild(priority);

    todoElement.appendChild(todoContent);

    return todoElement;
}