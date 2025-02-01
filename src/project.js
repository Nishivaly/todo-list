export function setProjectContent(project) {

    const projectContent = document.createElement('div');
    projectContent.classList.add('project-content');

    const title = document.createElement('p');
    title.classList.add('project-title');
    title.textContent = project.title

    const notes = document.createElement('p');
    notes.classList.add('project-notes');

    notes.textContent = project.notes;

    projectContent.appendChild(title);
    projectContent.appendChild(notes);

    return projectContent;
}