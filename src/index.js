import "./styles.css"
import { createProject, createTodo, createProjectList } from "./todos"
import { displayProject } from "./elements"

const myProjects = createProjectList();

myProjects.addProject(createProject('Project title','project notes'))
myProjects.addProject(createProject('Project title','project notes'))

myProjects.projects.forEach(project => {
    project.addTodo(createTodo('todo title', "todo desc", 'duetomorrow', 'high priority'));
})

myProjects.projects.forEach(project => {
    displayProject(project);
})

console.log(myProjects.projects)


// myProjects.projects[0].addTodo(createTodo('todo title', "todo desc", 'duetomorrow', 'high priority'))

// const myProject = createProject('My title', 'these are my notes');
// addProject(createProject('My title', 'these are my notes'));
// addProject(createProject('My title', 'these are my notes'))

// myProject.addTodo(createTodo('todo title',
//     'todo desc', 'due tomororw', "high proirity"
// ))
// console.log(myProject)