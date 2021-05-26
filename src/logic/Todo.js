import { Task } from './Task'

class Todo extends Task {
  constructor(title, description, dueDate) {
    super(title, description, dueDate)
  }
}

export { Todo }