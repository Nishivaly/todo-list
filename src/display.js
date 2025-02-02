import { createProjectElement } from "./project";
import { createTodoElement } from "./todoelement";

export function displayProjects(listOfProjects) {

    while (elements.projectList.firstChild) {
        elements.projectList.removeChild(elements.projectList.firstChild);
    }

    listOfProjects.forEach((project, i) => {

        const projectElement = createProjectElement(project, i);

        project.todos.forEach((todo, j) => {

            const todoElement = createTodoElement(todo, j)

            const todoList = projectElement.querySelector('.todo-list');
            todoList.appendChild(todoElement);
        });
        
        elements.projectList.appendChild(projectElement);
    });
}

const elements = (() => {

    const content = document.querySelector('.content');

    const projectList = document.createElement('div');
    projectList.id = 'project-list';

    content.appendChild(projectList);

    return { projectList }
})();