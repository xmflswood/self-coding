class VN {
  constructor(tag, attrs, children) {
    this.tag = tag
    this.attrs = attrs || {}
    this.children = children || []
  }
  toElement () {
    let el = document.createElement(this.tag)
    Object.keys(this.attrs).forEach(key => {
      el.setAttribute(key, this.attrs[key])
    })
    this.children.forEach(child => {
      let node
      if (child instanceof VN) {
        node = child.toElement()
      } else {
        node = document.createTextNode(child)
      }
      el.appendChild(node)
    })
    return el
  }
}
function updateElement($parent, oldNode, newNode, index = 0) {
  // 欠缺判断oldNode newNode是否为VN实例
  if (!oldNode && newNode) {
    $parent.appendChild(newNode.toElement())
  } else if (oldNode && !newNode) {
    $parent.removeChild($parent.childNodes[index])
  } else if (changed(oldNode, newNode)) {
    $parent.replaceChild(newNode.toElement(), $parent.childNodes[index])
  } else if (newNode.tag) {
    const oldLength = oldNode.children.length
    const newLength = newNode.children.length
    for (let i = 0; i < oldLength || i < newLength; i++) {
      updateElement($parent.childNodes[index], oldNode.children[i], newNode.children[i], i)
    }
  }
  function changed (a, b) {
    return (
      typeof a !== typeof b ||
      (typeof a === 'string' && a !== b) ||
      a.tag !== b.tag
    )
  }
}
