export function createProjectElement(project, index) {

    const projectElement = document.createElement('div');
    projectElement.classList.add('project');
    projectElement.setAttribute("data-id", index);

    const projectContent = document.createElement('div');
    projectContent.classList.add('project-content');

    const title = document.createElement('h2');
    title.classList.add('project-title');
    title.textContent = project.title

    const notes = document.createElement('p');
    notes.classList.add('project-notes');
    notes.textContent = project.notes;

    projectContent.appendChild(title);
    projectContent.appendChild(notes);

    projectElement.appendChild(projectContent);

    addProjectButtons.deleteProject(projectElement);
    addProjectButtons.addTodo(projectElement);

    const todoList = document.createElement('div');
    todoList.classList.add('todo-list');
    projectElement.appendChild(todoList);

    return projectElement;
}

const addProjectButtons = (() => {

    const deleteProject = (projectElement) => {
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-project');
        deleteButton.textContent = "Delete project";
        projectElement.appendChild(deleteButton);
    }

    const addTodo = (projectElement) => {
        const addTodoButton = document.createElement('button');
        addTodoButton.classList.add('add-todo');
        addTodoButton.textContent = "Add todo";
        projectElement.appendChild(addTodoButton);
    }

    return {
        deleteProject,
        addTodo,
    }
})();

