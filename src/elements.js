export function displayProject(project) {

    const projectElement = document.createElement('div');
    projectElement.classList.add('project');
    projectElement.textContent = (`${project.title} and ${project.notes}`)

    const todoList = document.createElement('div');
    todoList.classList.add('todo-list');

    project.todos.forEach(todo => {
        const todoElement = document.createElement('div');
        todoElement.classList.add('todo');
        todoElement.textContent = (`${todo.title}, ${todo.description}, ${todo.dueDate}, ${todo.priority}`)
        todoList.appendChild(todoElement);
    });

    projectElement.appendChild(todoList);

    elements.projectList.appendChild(projectElement);
}

const elements = (() => {
    const content = document.querySelector('.content');

    const projectList = document.createElement('div');
    projectList.id = 'project-list';

    content.appendChild(projectList);

    return { projectList }
})();