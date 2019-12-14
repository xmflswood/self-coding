var a = {
  name: 'a',
  children: [
    {
      name: 'b',
      children: [
        {
          name: 'c',
          children: []
        }, {
          name: 'e',
          children: [] 
        }
      ]
    }, {
      name: 'd',
      children: []
    }
  ]
}

function dfs(node) {
  let nodes = []
  _s(node)
  function _s(node) {
    nodes.push(node)
    let c = node.children
    if (c) {
      c.forEach(child => {
        _s(child)
      })
    }
  }
  return nodes
}

function bfs(node) {
  let nodes = []
  nodes.push(node)
  function _s(node) {
    let c = node.children
    if (c) {
      c.forEach(child => {
        nodes.push(child)
      })
      c.forEach(child => {
        _s(child)
      })
    }
  }
  _s(node)
  return nodes
}
