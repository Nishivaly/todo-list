import { storeShit } from "./storage";

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
        loadProjects: (savedProjects) => {
            projectList.projects = savedProjects.map(project => ({
                ...project,
                todos: project.todos.map(todo => ({
                    ...todo,
                    ...toggleable(), // Restore the toggle() method
                })),
            }));

        }
    }
}

const canAddProject = (state) => ({
    addProject: (title, notes) => {
        const project = {
            title,
            notes,
            todos: [],
            // ...toggleable(),
        };
        state.projects.push(project)
        storeShit(state.projects);
    }
});

const canDeleteProject = (state) => ({
    deleteProject: (index) => {
        state.projects.splice(index, 1);
        storeShit(state.projects);
    }
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
        storeShit(state.projects);
    }
});

const canDeleteTodo = (state) => ({
    deleteTodo: (projectIndex, todoIndex) => {
        const project = state.projects[projectIndex];
        project.todos.splice(todoIndex, 1);
        storeShit(state.projects);
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