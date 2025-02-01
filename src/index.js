import "./styles.css"
import { createProjectList } from "./factory"
import { displayProjects } from "./display.js"


const myProjectList = createProjectList();
myProjectList.addProject('titleasd', 'mynots')
myProjectList.addTodo(0, 'todotitle', 'desc', 'duetmw', 'high');

myProjectList.addProject('titleasd', 'mynots')
myProjectList.addTodo(1, 'todotitle', 'desc', 'duetmw', 'high');

myProjectList.addProject('titleasd', 'mynots')
myProjectList.addTodo(2, 'todotitle', 'desc', 'duetmw', 'high');

console.log(myProjectList.getProjects());

console.log(myProjectList.getTodos(0))

displayProjects(myProjectList.getProjects());

const mytodo = myProjectList.getTodos(0)[0];

console.log(mytodo)

mytodo.toggle();
console.log(mytodo)


// import { createProject, createTodo, createProjectList } from "./factory"
// import { displayProjects } from "./elements"

// const setup = (() => {

//     const myProjects = createProjectList();
//     myProjects.addProject(createProject('Default project', 'notes here'));
//     displayProjects(myProjects);

//     const projectModal = document.querySelector('#project-modal');
//     const showProjectModal = document.querySelector('#open-project-modal');
//     const closeProjectModal = document.querySelector('#close-project-modal');
//     const projectForm = document.querySelector('#project-form');

//     showProjectModal.addEventListener('click', () => {
//         projectModal.showModal();
//     })

//     closeProjectModal.addEventListener('click', () => {
//         projectModal.close();
//     })

//     projectForm.addEventListener('submit', event => {
//         event.preventDefault();
//         const title = document.querySelector('#project-title').value;
//         const notes = document.querySelector('#project-notes').value;
//         const project = createProject(title, notes);
//         myProjects.addProject(project);
//         projectForm.reset();
//         projectModal.close();
//         displayProjects(myProjects);
//     })

//     const projectList = document.querySelector("#project-list");

//     projectList.addEventListener('click', event => {
//         if (event.target.classList.contains("delete-project")) {

//             const index = event.target.closest('div').dataset.id;
//             myProjects.deleteProject(index);
//             displayProjects(myProjects);
//         }

//         if (event.target.classList.contains("delete-todo")) {

//             const i = event.target.closest('.project').dataset.id;
//             const j = event.target.closest('div').dataset.id;
//             myProjects.projects[i].deleteTodo(j);
//             displayProjects(myProjects);
//         }

//         if (event.target.classList.contains("add-todo")) {

//             const index = event.target.closest('div').dataset.id;
//             myProjects.projects[index].addTodo(createTodo('todo title', "todo desc", 'duetomorrow', 'high priority'));
//             displayProjects(myProjects);
//         }

//     })
// })();
