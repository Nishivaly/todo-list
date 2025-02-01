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












// const todoAdder = (state) => ({
//     addTodo: (title, description, dueDate, priority) => {
//         const todo = {
//             title,
//             description,
//             dueDate,
//             priority
//         }
// })

// export function createProject(title, notes) {
//     const project = {
//         title,
//         notes,
//         todos: [],
//         addTodo(todo) {
//             this.todos.push(todo)
//         },
//         deleteTodo(index) {
//             this.todos.splice(index, 1)
//         },
//     }
//     return Object.assign(
//         {},
//         project,
//         toggleable()
//     )
// }

// export function createTodo(title, description, dueDate, priority) {
//     const todo = {
//         title,
//         description,
//         dueDate,
//         priority,
//     }
//     return Object.assign(
//         {},
//         todo,
//         toggleable()
//     )
// }

// const toggleable = () => ({
//     completed: false,
//     toggle() {
//         this.completed = !this.completed;
//         console.log(`${this.title} is now ${this.completed ? "completed" : "incomplete"}.`);
//     }
// });