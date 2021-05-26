const Collection = SuperClass => class extends SuperClass {

  _items = []

  add(...items) {
    this._items.push(...items)
  }
}

export { Collection }