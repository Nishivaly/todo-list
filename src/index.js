import "./styles.css"
import { createProjectList } from "./factory"
import { displayProjects } from "./display.js"

const myProjectList = createProjectList();
const projects = myProjectList.getProjects();

myProjectList.addProject('Default project', 'Cool notes about our shit idk')
myProjectList.addTodo(0, 'todotitle', 'desc', 'duetmw', 'high');

displayProjects(projects);

(() => {
    const projectModal = document.querySelector('#project-modal');
    const showProjectModal = document.querySelector('#open-project-modal');
    const closeProjectModal = document.querySelector('#close-project-modal');
    const projectForm = document.querySelector('#project-form');

    const todoModal = document.querySelector('#todo-modal');
    const closeTodoModal = document.querySelector('#close-todo-modal');
    const todoForm = document.querySelector('#todo-form');

    showProjectModal.addEventListener('click', () => {
        projectModal.showModal();
    })

    closeProjectModal.addEventListener('click', () => {
        projectModal.close();
    })

    closeTodoModal.addEventListener('click', () => {
        todoModal.close();
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

    todoForm.addEventListener('submit', event => {
        event.preventDefault();

        const title = document.querySelector('#todo-title').value;
        const description = document.querySelector('#todo-description').value;
        const index = document.querySelector('#todo-form').dataset.index;

        myProjectList.addTodo(index, title, description, 'duedate', 'high');

        todoForm.reset();
        todoModal.close();

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
            
            const index = event.target.closest('.project').dataset.id;
            todoForm.dataset.index = index;
            todoModal.showModal();

            // myProjectList.addTodo(index, 'todotile', 'descr', 'duetmw', 'hiugh');
            
            // displayProjects(projects);
        }
    })
   
})();
