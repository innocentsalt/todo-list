import { Collection } from './Collection'

class Empty {
  constructor() {}
}

class TodoList extends Collection(Empty) {
  get projects() { return this.items }
}

export { TodoList }