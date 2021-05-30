import { Task } from './Task'

// Todo IS A Task
class Todo extends Task {
  constructor(title, description, dueDate, complete) {
    super(title, description, dueDate, complete)
  }
}

export { Todo }