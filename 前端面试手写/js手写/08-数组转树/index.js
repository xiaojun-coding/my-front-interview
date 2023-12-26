/**
 * @description: 实现数组（列表）转树
 * @param {*} arr
 * @return {*}
 */
function arrayToTree(arr) {
  let root = null; // 根节点
  const map = new Map(); // 构建map集合
  arr.forEach((item) => {
    const { id, name, parentId } = item; // 结构id, name, parentId
    const treeNode = { id, name }; // 构建树节点
    console.log(treeNode, 'treeNode')
    map.set(id, treeNode);
    console.log(map, 'map')
    const currentNode = map.get(parentId) // 判断当前节点
    if(currentNode) {
        if(!currentNode.children) currentNode.children = []
        currentNode.children.push(treeNode)
    }
    if(parentId===0) root = treeNode
  });
 return root
}
const arr = [
  { id: 1, name: "部门A", parentId: 0 },
  { id: 2, name: "部门B", parentId: 1 },
  { id: 3, name: "部门C", parentId: 1 },
  { id: 4, name: "部门D", parentId: 2 },
  { id: 5, name: "部门E", parentId: 2 },
  { id: 6, name: "部门F", parentId: 3 },
];

// 测试
console.log(arr)
const result = arrayToTree(arr)
console.log(result)