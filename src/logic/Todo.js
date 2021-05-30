import { Task } from './Task'

class Todo extends Task {
  constructor(title, description, dueDate, complete) {
    super(title, description, dueDate, complete)
  }
}

export { Todo }