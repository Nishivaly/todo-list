import { createProjectElement } from "./project";
import { createTodoElement, setTodoContent } from "./todo";

export function displayProjects(listOfProjects) {

    while (elements.projectList.firstChild) {
        elements.projectList.removeChild(elements.projectList.firstChild);
    }

    listOfProjects.forEach((project, i) => {

        const projectElement = createProjectElement(project, i);
        elements.projectList.appendChild(projectElement);

        project.todos.forEach((todo, j) => {

            const todoElement = createTodoElement(todo, j)
            //           
            //             elements.addDeleteTodoBtn(todoElement);

            //             todoList.appendChild(todoElement);
        });
    });
}

const elements = (() => {

    const content = document.querySelector('.content');

    const projectList = document.createElement('div');
    projectList.id = 'project-list';
    content.appendChild(projectList);


    //     const addDeleteTodoBtn = (todoElement) => {
    //         const deleteButton = document.createElement('button');
    //         deleteButton.classList.add('delete-todo');
    //         deleteButton.textContent = "Delete todo";
    //         todoElement.appendChild(deleteButton);
    //     }

    return {
        projectList,
        //         addDeletePrjBtn, addDeleteTodoBtn,
        //         addTodoBtn
    }
})();