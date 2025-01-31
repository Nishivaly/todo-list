export function displayProject(newProject) {

    const project = document.createElement('div');
    project.classList.add('project');
    project.textContent = (`${newProject.title} and ${newProject.notes}`)

    const toDo = document.createElement('div');
    toDo.classList.add('todo');
    project.appendChild(toDo);

    elements.projectList.appendChild(project);
}



const elements = (() => {
    const content = document.querySelector('.content');

    const projectList = document.createElement('div');
    projectList.id = 'project-list';

    content.appendChild(projectList);

    return { projectList }
})();