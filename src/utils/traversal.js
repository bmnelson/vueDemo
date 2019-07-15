/*
深度优先遍历
*/
export function DepthFirstTraversal(domTree) {
  domTree.map(item => {
    console.log(item.name)
    if (item.children) {
      DepthFirstTraversal(item.children)
    }
  })
}

/*
广度优先遍历
*/
export function WideTraversal(node) {
  let nodes = [];
  if (node != null) {
    let queue = node;
    while (queue.length != 0) {
      let item = queue.shift();
      nodes.push(item);
      if (item.children) {
        let children = item.children;
        for (let i = 0; i < children.length; i++)
          queue.push(children[i]);
      }
    }
  }
  return nodes;
}

