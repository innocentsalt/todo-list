const Collection = SuperClass => class extends SuperClass {

  _items = []

  add(...items) {
    this._items.push(...items)
  }

  remove(...items) {
    items.forEach(item => this._items.splice(this._items.indexOf(item), 1))
  }

  clear() {
    this._items = []
  }

  get items() {
    return this._items
  }
}

export { Collection }