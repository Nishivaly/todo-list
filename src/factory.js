export const createProjectList = () => {
    const projectList = {
        projects: []
    };
    return {
        ...canAddProject(projectList),
        ...canDeleteProject(projectList),
        ...canGetProjects(projectList),
        ...canAddTodo(projectList),
        ...canDeleteTodo(projectList),
        ...canGetTodos(projectList),
    }
}

const canAddProject = (state) => ({
    addProject: (title, notes) => {
        const project = {
            title,
            notes,
            todos: [],
            ...toggleable(),
        };
        state.projects.push(project)
    }
});

const canDeleteProject = (state) => ({
    deleteProject: (index) => state.projects.splice(index, 1),
});

const canGetProjects = (state) => ({
    getProjects: () => state.projects
})

const canAddTodo = (state) => ({
    addTodo: (projectIndex, title, description, dueDate, priority) => {
        const project = state.projects[projectIndex];
        const todo = {
            title,
            description,
            dueDate,
            priority,
            ...toggleable(),
        }
        project.todos.push(todo);
    }
});

const canDeleteTodo = (state) => ({
    deleteTodo: (projectIndex, todoIndex) => {
        const project = state.projects[projectIndex];
        project.todos.splice(todoIndex, 1);
    }
})

const canGetTodos = (state) => ({
    getTodos: projectIndex => state.projects[projectIndex].todos
})

const toggleable = () => ({
    completed: false,
    toggle() {
        this.completed = !this.completed;
        console.log(`${this.title} is now ${this.completed ? "completed" : "incomplete"}.`);
    }
});