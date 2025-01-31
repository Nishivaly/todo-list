
const content = document.querySelector('.content');

const projectList = document.createElement('div');
projectList.id = 'project-list';

content.appendChild(projectList);

export function addProject(newProject) {
    
    const project = document.createElement('div');
    project.classList.add('project');

    project.textContent = (`${newProject.title} and ${newProject.notes}`)

    projectList.appendChild(project);
}