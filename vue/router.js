class Router {
  constructor(options) {
    this.routes = options.routes
    this.history = new Hash(this)
  }
  push (r) {
    this.history.push(r)
  }
}
class Hash {
  constructor(router) {
    this.routes = router.routes
    this.current = {}
    window.addEventListener('hashchange', () => {
      let hash = this.getUrl()
      const target = this.match(hash)
      this.current = target || {}
    })
  }
  getUrl() {
    const href = window.location.href
    const index = href.indexOf('#')
    const hash = (index === -1) ? '' : href.slice(index + 1)
    return hash
  }
  push(r) {
    let target = this.match(r)
    if (!target) return
    this.current = target
    this.changeUrl(target.path)
  }
  changeUrl(path, replace) {
    const href = window.location.href
    const index = href.indexOf('#')
    const base = (index === -1) ? href : href.slice(0, index)
    if (replace) {
      window.history.replaceState({}, '', `${base}#${path}`)
    } else {
      window.history.pushState({}, '', `${base}#${path}`)
    }
  }
  match(r) {
    for (let i = 0; i < this.routes.length; i ++) {
      if (typeof r === 'object') {
        if (r.name === this.routes[i].name) return this.routes[i]
      } else {
        if (r === this.routes[i].path) return this.routes[i]
      }
    }
    return false
  }
}
var router = new Router({
  routes: [{
    path: '/test',
    name: 'test',
    c: '1'
  }, {
    path: '/bar',
    name: 'bar',
    c: 'w'
  }]
})
