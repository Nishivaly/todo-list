export function createProject(title, notes) {
    const project = {
        title,
        notes
    }
    return Object.assign(
        {},
        project,
        toggleable()
    )
}

export function createTodo(title, description, dueDate, priority) {
    const todo = {
        title,
        description,
        dueDate,
        priority,
    }
    return Object.assign(
        {},
        todo,
        toggleable()
    )
}

const toggleable = () => ({
    completed: false,
    toggle() {
        this.completed = !this.completed;
        console.log(`${this.title} is now ${this.completed ? "completed" : "incomplete"}.`);
    }
});