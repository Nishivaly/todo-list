import "./styles.css"
import { createProjectList } from "./factory"
import { displayProjects } from "./display.js"
import {
    setUpTodoEditButtonEvent,
    setUpTodoEditFormEvent,
    setUpTodoEditCloseModalEvent
} from "./todoedit.js";

const myProjectList = (() => {

    let myProjectList = createProjectList();
    const storage = JSON.parse(localStorage.getItem("projects"));
    if ( !storage || storage.length === 0) {
        myProjectList.addProject('Default project', 'Cool notes about our shit idk');
    } else{
        myProjectList.loadProjects(storage);
    }
    displayProjects(myProjectList.getProjects())

    return myProjectList;
})();

const eventSetup = (() => {
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

    projectForm.addEventListener('submit', event => {
        event.preventDefault();

        const title = document.querySelector('#project-title').value;
        const notes = document.querySelector('#project-notes').value;

        myProjectList.addProject(title, notes);

        projectForm.reset();
        projectModal.close();

        displayProjects(myProjectList.getProjects());
    })

    const projectList = document.querySelector("#project-list");

    projectList.addEventListener('click', event => {
        if (event.target.classList.contains("delete-project")) {

            const index = event.target.closest('div').dataset.id;
            myProjectList.deleteProject(index);

            displayProjects(myProjectList.getProjects());
        }

        if (event.target.classList.contains("delete-todo")) {

            const i = event.target.closest('.project').dataset.id;
            const j = event.target.closest('div').dataset.id;
            myProjectList.deleteTodo(i, j);

            displayProjects(myProjectList.getProjects());
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

            displayProjects(myProjectList.getProjects());
        }

        if (event.target.classList.contains("edit-todo")) {

            setUpTodoEditButtonEvent(event, myProjectList);
        }

        if (event.target.classList.contains("todo-content")) {
            const children = event.target.querySelectorAll('.hidden');
            children.forEach(child => {
                child.classList.remove('hidden');
                
            });
        }
    })

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

        displayProjects(myProjectList.getProjects());
    })

    setUpTodoEditFormEvent(myProjectList, displayProjects);

    setUpTodoEditCloseModalEvent();

})();
