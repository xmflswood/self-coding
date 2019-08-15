var a = {
  [Symbol.iterator] () {
    return {
      next () {
        return {value: Math.random(), done: false}
      }
    }
  }
}
let r = []
for (let v of a) {
  r.push(v)
  console.log(v)
  if(r.length === 100) break
}
