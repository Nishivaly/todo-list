import "./styles.css"
import { createProject, createTodo, createProjectList } from "./todos"
import { displayProjects } from "./elements"

const myProjects = createProjectList();

const projectList = document.querySelector("#project-list");
const newProjectBtn = document.querySelector('#new-project-btn')

newProjectBtn.addEventListener('click', () => {

    const project = createProject('Project title', 'project notes');
    project.addTodo(createTodo('todo title', "todo desc", 'duetomorrow', 'high priority'));

    myProjects.addProject(project);

    displayProjects(myProjects);
})

projectList.addEventListener('click', event => {

    if (event.target.classList.contains("delete-project")) {

        const index = event.target.closest('div').dataset.id;
        myProjects.deleteProject(index);
        displayProjects(myProjects);
    }
    
    if (event.target.classList.contains("delete-todo")) {

        const i = event.target.closest('.project').dataset.id;
        const j = event.target.closest('div').dataset.id;
        myProjects.projects[i].deleteTodo(j);
        displayProjects(myProjects);
    }

})