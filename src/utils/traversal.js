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
export function wideFirstTraversal(domTree) {
  let queue = [];
  let index = 0;
  while (domTree[index] != null) {
    queue.push(domTree[index])
    index++;
  }
  index=0

}