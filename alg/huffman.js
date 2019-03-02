class Huffman{
  constructor(left, right) {
    this.left = left
    this.right = right
  }
  val () {
    return (
      (this.left instanceof Huffman ? this.left.val() : +this.left) + 
      (this.right instanceof Huffman ? this.right.val() : +this.right)
    )
  }
}
const list = [1,2,3,4,5,6]
function create(data) {
  let d = JSON.parse(JSON.stringify(data))
  for (;d.length > 1;) {
    d.sort((a, b) => {
      a = a instanceof Huffman ? a.val() : a
      b = b instanceof Huffman ? b.val() : b
      return a - b
    })
    let item = new Huffman(d.shift(), d.shift())
    d.push(item)
  }
  return d[0]
}
