class Bus{
  constructor() {
    this.eventList = {}
  }
  $on(key, fn) {
    if (!this.eventList[key]) this.eventList[key] = []
    this.eventList[key].push(fn)
  }
  $emit() {
    const [key, ...args] = arguments
    if (!this.eventList[key] || this.eventList[key].length === 0) return false
    this.eventList[key].forEach(fn => {
      fn.apply(this, args)
    })
  }
}
