/**
 * @description: 实现树转列表（树转数组）
 * @param {*} tree
 * @param {*} result
 * @param {*} parent
 * @return {*}
 */
function treeToList(tree, result = [], parent = null) {
  tree.forEach((item) => {
    item.parent = parent; // 增加parent节点, 根节点为空，自节点的parent为每个children的id
    result.push(item);
    if (item.children && item.children.length > 0) {
      // 递归调用
      treeToList(item.children, result, item.id);
      delete item.children;
    }
  });
  return result;
}

const tree = [
  {
    id: 1,
    name: "手机",
    level: 1, // 层级
    isLeaf: false, //是否为叶子节点
    children: [
      {
        id: 11,
        name: "智能手机",
        level: 2,
        children: [
          {
            id: 111,
            name: "小米",
            level: 3,
            isLeaf: true,
          },
          {
            id: 112,
            name: "华为",
            level: 3,
            isLeaf: true,
          },
          {
            id: 111,
            name: "苹果",
            level: 3,
            isLeaf: true,
          },
        ], // 层级
        isLeaf: false,
      },
      {
        id: 12,
        name: "功能手机",
        level: 2, // 层级
        isLeaf: true, //是否为叶子节点
      },
    ], // 子节点
  },
  {
    id: 2,
    name: "家电",
    level: 1,
    children: [
      {
        id: 21,
        name: "冰箱",
        level: 2,
        isLeaf: true,
      },
      {
        id: 22,
        name: "空调",
        level: 2,
        isLeaf: true,
      },
      {
        id: 23,
        name: "电视机",
        level: 2,
        isLeaf: true,
      },
    ],
    isLeaf: false,
  },
  {
    id: 3,
    name: "服装",
    level: 1,
    isLeaf: true,
  },
];

// 测试
console.log(tree);
const result = treeToList(tree);
console.log(result, "result");
