import "./styles.css"
import { createProject, createTodo, createProjectList } from "./todos"
import { addProject } from "./elements"

const myProjects = createProjectList();

myProjects.addProject(createProject('Project title','project notes'))
myProjects.addProject(createProject('Project title','project notes'))

console.log(myProjects.projects)

myProjects.projects.forEach(project => {
    addProject(project);
})


// const myProject = createProject('My title', 'these are my notes');
// addProject(createProject('My title', 'these are my notes'));
// addProject(createProject('My title', 'these are my notes'))

// myProject.addTodo(createTodo('todo title',
//     'todo desc', 'due tomororw', "high proirity"
// ))
// console.log(myProject)