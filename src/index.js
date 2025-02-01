import "./styles.css"
import { createProjectList } from "./factory"
import { displayProjects } from "./display.js"


const myProjectList = createProjectList();
const projects = myProjectList.getProjects();

myProjectList.addProject('titleasd', 'mynots')
myProjectList.addTodo(0, 'todotitle', 'desc', 'duetmw', 'high');

myProjectList.addProject('titleasd', 'mynots')
myProjectList.addTodo(1, 'todotitle', 'desc', 'duetmw', 'high');

myProjectList.addProject('titleasd', 'mynots')
myProjectList.addTodo(2, 'todotitle', 'desc', 'duetmw', 'high');

console.log(myProjectList.getProjects());

console.log(myProjectList.getTodos(0));

displayProjects(projects);

const mytodo = myProjectList.getTodos(0)[0];

console.log(mytodo);

mytodo.toggle();
console.log(mytodo);

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

            const index = event.target.closest('.project').dataset.id;
            myProjectList.addTodo(index, 'todotile', 'descr', 'duetmw', 'hiugh');
            
            displayProjects(projects);
        }
    })
})();
