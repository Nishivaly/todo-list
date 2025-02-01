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




// // Step 1: Create a new project list
// const projectList = createProjectList();

// // Step 2: Add a project to the project list
// projectList.addProject('My First Project', 'This is a description of the first project');

// // Step 3: Retrieve the created project list to view the projects
// console.log('Project List:', projectList.getProjects());

// // Step 4: Add a todo to the first project (which is at index 0 in the projects array)
// const firstProject = projectList.getProjects()[0];
// firstProject.addTodo('Finish the task', 'Complete the first task of the project', '2025-02-10', 'High');

// // Step 5: View the updated project to see the todo added
// console.log('Updated Project:', projectList.getProjects()[0]);













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
