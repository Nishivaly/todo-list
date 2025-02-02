export const setUpTodoEditButtonEvent = (event, myProjectList) => {

    const i = event.target.closest('.project').dataset.id;
    const j = event.target.closest('.todo').dataset.id;

    elements.todoEditForm.dataset.indexProject = i;
    elements.todoEditForm.dataset.indexTodo = j;

    const todo = myProjectList.getTodos(i)[j];
    const { title, description, dueDate, priority } = todo;

    document.querySelector('#todo-edit-title').value = title;
    document.querySelector('#todo-edit-description').value = description;
    document.querySelector('#todo-edit-due').value = dueDate;
    document.querySelector('#todo-edit-priority').value = priority;

    elements.todoEditModal.showModal();
}

export const setUpTodoEditFormEvent = (myProjectList, displayProjects) => {

    elements.todoEditForm.addEventListener('submit', event => {

        event.preventDefault();

        const i = document.querySelector('#todo-edit-form').dataset.indexProject;
        const j = document.querySelector('#todo-edit-form').dataset.indexTodo;

        const todo = myProjectList.getTodos(i)[j];

        todo.title = document.querySelector('#todo-edit-title').value;
        todo.description = document.querySelector('#todo-edit-description').value;
        todo.dueDate = document.querySelector('#todo-edit-due').value;
        todo.priority = document.querySelector('#todo-edit-priority').value;

        elements.todoEditForm.reset();
        elements.todoEditModal.close();

        displayProjects(myProjectList.getProjects());
    });
}

export const setUpTodoEditCloseModalEvent = () => {
    elements.closeTodoEditModal.addEventListener('click', () => {
        elements.todoEditModal.close();
    })
};

const elements = (() => {
    const todoEditModal = document.querySelector('#todo-edit-modal');
    const closeTodoEditModal = document.querySelector('#close-todo-edit-modal');
    const todoEditForm = document.querySelector('#todo-edit-form');

    return {
        todoEditForm,
        todoEditModal,
        closeTodoEditModal
    }
})();