import "./styles.css"
import { createProject, createTodo, createProjectList } from "./todos"
import { displayProjects } from "./elements"

const myProjects = createProjectList();

const newProjectBtn = document.querySelector('#new-project-btn')

newProjectBtn.addEventListener('click', () => {

    const project = createProject('Project title', 'project notes');
    project.addTodo(createTodo('todo title', "todo desc", 'duetomorrow', 'high priority'));
    
    myProjects.addProject(project);

    displayProjects(myProjects);
})