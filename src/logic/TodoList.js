import { Collection } from './Collection'

class Empty {
  constructor() {}
}

class TodoList extends Collection(Empty) {
}

export { TodoList }