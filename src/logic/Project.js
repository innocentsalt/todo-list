import { Task } from './Task'
import { Collection } from './Collection'

class Project extends Collection(Task) {
  constructor(title) {
    super(title)
  }

  get todos() { return this.items }
}

export { Project }