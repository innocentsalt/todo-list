import { uid } from 'uid'

class Task {
  constructor(title = '', description = '', dueDate = new Date()) {
    this._title = title
    this._description = description
    this._dueDate = dueDate
    this._complete = false
    this._id = uid(16)
  }

  get title() { return this._title }

  get description() { return this._description }

  get dueDate() { return this._dueDate }

  get complete() { return this._complete }

  get id() { return this._id }

  set title(value) {
    this._title = value
  }

  set description(value) {
    this._description = value
  }

  set dueDate(value) {
    this._dueDate = value 
  }

  set complete(value) {
    this._complete = value
  }
}

export { Task }