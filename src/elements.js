import { setProjectContent } from "./project";

export function displayProjects(myProjects) {
    while (elements.projectList.firstChild) {
        elements.projectList.removeChild(elements.projectList.firstChild);
    }

    myProjects.projects.forEach((project, i) => {

        const projectElement = document.createElement('div');
        projectElement.classList.add('project');
        projectElement.setAttribute("data-id", i);
        
        const projectContent = setProjectContent(project);
        projectElement.appendChild(projectContent);

        elements.addDeletePrjBtn(projectElement);
        elements.addTodoBtn(projectElement);

        const todoList = document.createElement('div');
        todoList.classList.add('todo-list');

        project.todos.forEach((todo, j) => {
            const todoElement = document.createElement('div');
            todoElement.classList.add('todo');
            todoElement.setAttribute("data-id", j);
            todoElement.textContent = (`${todo.title}, ${todo.description}, ${todo.dueDate}, ${todo.priority}`)
            elements.addDeleteTodoBtn(todoElement);

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


    const addTodoBtn = (projectElement) => {
        const addTodoButton = document.createElement('button');
        addTodoButton.classList.add('add-todo');
        addTodoButton.textContent = "Add todo";
        projectElement.appendChild(addTodoButton);
    }

    const addDeleteTodoBtn = (todoElement) => {
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-todo');
        deleteButton.textContent = "Delete todo";
        todoElement.appendChild(deleteButton);
    }

    return {
        projectList,
        addDeletePrjBtn, addDeleteTodoBtn,
        addTodoBtn
    }
})();