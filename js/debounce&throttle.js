function limit(fn, delay, isDebounce) {
  let timer = null
  return function(...args) {
    let self = this
    function t() {
      timer = null
      fn.apply(this, args)
    }
    if (isDebounce) clearTimeout(timer)
    if (!timer || isDebounce) timer = setTimeout(t, delay)
  }
}
function debounce(fn, delay) {
  return limit(fn, delay, true)
}
function throttle(fn, delay) {
  return limit(fn, delay)
}
