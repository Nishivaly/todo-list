import "./styles.css"
import { createProjectList } from "./factory"
import { displayProjects } from "./display.js"

const myProjectList = createProjectList();
const projects = myProjectList.getProjects();

myProjectList.addProject('Default project', 'Cool notes about our shit idk')
myProjectList.addTodo(0, 'idk', 'desc', 'due', 'ihgh');
myProjectList.getTodos(0)[0].title = 'urmwwwwm';

displayProjects(projects);

(() => {
    const projectModal = document.querySelector('#project-modal');
    const showProjectModal = document.querySelector('#open-project-modal');
    const closeProjectModal = document.querySelector('#close-project-modal');
    const projectForm = document.querySelector('#project-form');

    showProjectModal.addEventListener('click', () => {
        projectModal.showModal();
    })

    closeProjectModal.addEventListener('click', () => {
        projectModal.close();
    })

    projectForm.addEventListener('submit', event => {
        event.preventDefault();

        const title = document.querySelector('#project-title').value;
        const notes = document.querySelector('#project-notes').value;

        myProjectList.addProject(title, notes);

        projectForm.reset();
        projectModal.close();

        displayProjects(projects);
    })

    const projectList = document.querySelector("#project-list");

    projectList.addEventListener('click', event => {
        if (event.target.classList.contains("delete-project")) {

            const index = event.target.closest('div').dataset.id;
            myProjectList.deleteProject(index);

            displayProjects(projects);
        }

        if (event.target.classList.contains("delete-todo")) {

            const i = event.target.closest('.project').dataset.id;
            const j = event.target.closest('div').dataset.id;
            myProjectList.deleteTodo(i, j);

            displayProjects(projects);
        }

        if (event.target.classList.contains("add-todo")) {

            const projectIndex = event.target.closest('.project').dataset.id;
            todoForm.dataset.index = projectIndex;

            todoModal.showModal();
        }

        if (event.target.classList.contains("toggle-todo")) {
            const i = event.target.closest('.project').dataset.id;
            const j = event.target.closest('.todo').dataset.id;
            myProjectList.getTodos(i)[j].toggle();
            displayProjects(projects);
        }

        if (event.target.classList.contains("edit-todo")) {

            const i = event.target.closest('.project').dataset.id;
            const j = event.target.closest('.todo').dataset.id;

            todoEditForm.dataset.indexProject = i;
            todoEditForm.dataset.indexTodo = j;

            const todo = myProjectList.getTodos(i)[j];
            const { title, description, dueDate, priority } = todo;

            document.querySelector('#todo-edit-title').value = title;
            document.querySelector('#todo-edit-description').value = description;
            document.querySelector('#todo-edit-due').value = dueDate;
            document.querySelector('#todo-edit-priority').value = priority;

            todoEditModal.showModal();

        }
    })

    const todoModal = document.querySelector('#todo-modal');
    const closeTodoModal = document.querySelector('#close-todo-modal');
    const todoForm = document.querySelector('#todo-form');

    closeTodoModal.addEventListener('click', () => {
        todoModal.close();
    })

    // Add todo
    todoForm.addEventListener('submit', event => {
        event.preventDefault();

        const projectIndex = document.querySelector('#todo-form').dataset.index;

        const title = document.querySelector('#todo-title').value;
        const description = document.querySelector('#todo-description').value;
        const dueDate = document.querySelector('#todo-due').value;
        const priority = document.querySelector('#todo-priority').value;

        myProjectList.addTodo(projectIndex, title, description, dueDate, priority);

        todoForm.reset();
        todoModal.close();

        displayProjects(projects);
    })

    // Edit todo
    const todoEditModal = document.querySelector('#todo-edit-modal');
    const closeTodoEditModal = document.querySelector('#close-todo-edit-modal');
    const todoEditForm = document.querySelector('#todo-edit-form');

    closeTodoEditModal.addEventListener('click', () => {
        todoEditModal.close();
    })

    todoEditForm.addEventListener('submit', event => {
        event.preventDefault();

        const i = document.querySelector('#todo-edit-form').dataset.indexProject;
        const j = document.querySelector('#todo-edit-form').dataset.indexTodo;

        const todo = myProjectList.getTodos(i)[j];
        todo.title = document.querySelector('#todo-edit-title').value;
        todo.description = document.querySelector('#todo-edit-description').value;
        todo.dueDate = document.querySelector('#todo-edit-due').value;
        todo.priority = document.querySelector('#todo-edit-priority').value;

        todoEditForm.reset();
        todoEditModal.close();

        displayProjects(projects);
    })
})();
