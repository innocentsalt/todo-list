import { Collection } from './Collection'

class Empty {
  constructor() {}
}

class TodoList extends Collection(Empty) {
  get projects() { this._items }
}

export { TodoList }