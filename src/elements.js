export function displayProjects(myProjects) {
    while (elements.projectList.firstChild) {
        elements.projectList.removeChild(elements.projectList.firstChild);
    }

    myProjects.projects.forEach((project, index) => {

        const projectElement = document.createElement('div');
        projectElement.classList.add('project');
        projectElement.setAttribute("data-id", index);
        projectElement.textContent = (`${project.title} and ${project.notes}`)

        elements.addDeletePrjBtn(projectElement);

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
    });
}

const elements = (() => {

    const content = document.querySelector('.content');
    const projectList = document.createElement('div');
    projectList.id = 'project-list';
    content.appendChild(projectList);

    const addDeletePrjBtn = (projectElement) => {
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-project');
        deleteButton.textContent = "Delete project";
        projectElement.appendChild(deleteButton);
    }

    return { projectList, addDeletePrjBtn }
})();