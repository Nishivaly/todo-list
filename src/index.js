import "./styles.css"
import { createProject, createTodo, createProjectList } from "./todos"
import { displayProjects } from "./elements"

const myProjects = createProjectList();

myProjects.addProject(createProject('Project title','project notes'))
myProjects.addProject(createProject('Project title','project notes'))
myProjects.addProject(createProject('Project title','project notes'))
myProjects.addProject(createProject('Project title','project notes'))
myProjects.addProject(createProject('Project title','project notes'))

myProjects.projects.forEach(project => {
    project.addTodo(createTodo('todo title', "todo desc", 'duetomorrow', 'high priority'));
})

displayProjects(myProjects);

console.log(myProjects.projects)